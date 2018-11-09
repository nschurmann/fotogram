import { firestore } from 'firebase'

export interface IPost {
    [key: string]: {
        comment: string
        userId: string
        createdAt: firestore.Timestamp
        imageURL: string
    }
}