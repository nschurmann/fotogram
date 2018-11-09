import { Dispatch } from "redux";
import * as PostActions from '../Actions/PostActions'
import { IServices } from '../Services'

export const fetchPost = () => 
    async (dispatch: Dispatch, getState: () => any, { db, storage }: IServices) => {
        dispatch(PostActions.fetchStart())
        try {
            const snaps = await db.collection('posts').get()
            const posts: any = {}
            snaps.forEach(x => posts[x.id] = x.data())
            const imgIds = await Promise.all(Object.keys(posts)
                .map(async x => {
                    const ref = storage.ref('posts/${x}.jpg')
                    const url = await ref.getDownloadURL()
                    return [x, url]
                }))
            const keyedImages:any = {}
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