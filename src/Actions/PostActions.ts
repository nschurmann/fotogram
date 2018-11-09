import { FetchActionsTypes } from "../Utils/ActionTypes";
import { Action } from "redux";
import { IPost } from "../Models/PostsModel";

const fetchStart = () => ({
    type: FetchActionsTypes.START
})


const fetchSuccess = (payload: IPost) => ({
    type: FetchActionsTypes.SUCCESS,
    payload
})

const fetchError = (error: Error) => ({
    type: FetchActionsTypes.ERROR,
    error
})

export { fetchStart, fetchSuccess, fetchError };