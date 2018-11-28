import { Dispatch } from "redux";
import * as PostActions from '../Actions/PostActions'
import { IServices } from '../Services'
import { IPost } from "../Models/PostsModel";
import { download } from "../Utils/Utils";
import { IState } from "../Models/State";

export const fetchPost = () => 
    async (dispatch: Dispatch, getState: () => IState, { db, storage }: IServices) => {
        dispatch(PostActions.fetchStart())
        try {
            const snaps = await db.collection('posts').get()
            const posts: any = {}
            snaps.forEach(x => posts[x.id] = x.data())
            
            const imgIds = await Promise.all(Object.keys(posts)
                .map(async x => {
                    const ref = storage.ref(`posts/${x}.jpg`)
                    const url = await ref.getDownloadURL()
                    return [x, url]
                }))
            
            const keyedImages: any = {}
            imgIds.forEach(x => keyedImages[x[0]] = x[1])
            
            Object.keys(posts).forEach(x => posts[x] = {
                ...posts[x],
                imageURL: keyedImages[x],
            })
            dispatch(PostActions.fetchSuccess(posts))
        } catch (error) {
            dispatch(PostActions.fetchError(error))
        }
    }

export const like = (id: string) =>
    async (dispatch: Dispatch, getState: () => IState, { auth }: IServices) => {
        if (!auth.currentUser) {
            return
        }
        const token = await auth.currentUser.getIdToken()
        const path = `/api/posts/${id}/like`
        await fetch(path, {
            headers: {
                authorization: token
            }
        })
     }

export const share = (id: string) =>
    async (dispatch: Dispatch, getState: () => IState, { auth, db, storage }: IServices) => {
        if (!auth.currentUser) {
            return
        }
        const token = await auth.currentUser.getIdToken()
        const path = `/api/posts/${id}/share`
        const result = await fetch(path, {
            headers: {
                authorization: token
            }
        })

        const url = await storage.ref(`posts/${id}.jpg`).getDownloadURL()
        const blob = await download(url)
        const { id: postId }: { id: string } = await result.json()
        const ref = storage.ref(`posts/${postId}.jpg`)
        await ref.put(blob)
        const imageURL = await ref.getDownloadURL()
        const snap =  await db.collection('posts').doc(postId).get()

        dispatch(PostActions.addPost({ [snap.id]: {
            ...snap.data(),
            imageURL,
        } } as IPost))
    }

