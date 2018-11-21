import { IPost } from "./PostsModel";

export interface IState {
    Posts: {
        data: IPost
        fetched: boolean
        fetching: boolean
    }
    Users: {
        profileImage?: string
    }
}