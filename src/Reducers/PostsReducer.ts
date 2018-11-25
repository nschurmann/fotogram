import { FetchActionsTypes, PostActionTypes } from "../Utils/ActionTypes";
import { AnyAction } from "redux";
import { IState } from "../Models/State";

export default function reducer(state: IState, action: AnyAction) {
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
                data: {
                    ...state,
                    ...action.payload,
                }
            }
        default:
            return state
    }
}