import { Dispatch } from "redux";
import * as PostActions from '../Actions/PostActions'
import { IServices } from '../Services'

export const fetchPost = () => 
    async (dispatch: Dispatch, getState: () => any, { db }: IServices) => {
        dispatch(PostActions.fetchStart())
        try {
            const snaps = await db.collection('posts').get()
            const posts = {}
            snaps.forEach(x => posts[x.id] = x.data())
            dispatch(PostActions.fetchSuccess(posts))
        } catch (error) {
            dispatch(PostActions.fetchError(error))
        }
    }