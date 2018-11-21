import { firestore } from 'firebase'

export interface IPost {
    [key: string]: IPostData
}

export interface IPostData {
    comment: string
    userId: string
    createdAt: firestore.Timestamp
    imageURL: string
}