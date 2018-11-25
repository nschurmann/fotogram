import { FetchActionsTypes, PostActionTypes } from "../Utils/ActionTypes";
import { AnyAction } from "redux";

const initialState = {
    data: {},
    fetching: false,
    fetched: false
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case FetchActionsTypes.START:
            return {
                ...state,
                fetching: true
            }
        case FetchActionsTypes.SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false
            }
        case FetchActionsTypes.ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        case PostActionTypes.ADD_POST:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}