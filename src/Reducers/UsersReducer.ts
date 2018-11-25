import { AnyAction } from "redux";
import { UserActionTypes } from "../Utils/ActionTypes";
import { IState } from "../Models/State";

export default function reducer(state = {}, action: AnyAction) {
    switch (action.type) {
        case UserActionTypes.SET_PROFILE_IMAGE:
            return {
                ...state,
                profileImage: action.payload
            }
            break;
    
        default:
            return state;
    }
}