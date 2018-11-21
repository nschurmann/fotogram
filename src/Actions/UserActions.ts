import { UserActionTypes } from "../Utils/ActionTypes";

const setProfileImage = (payload: string) => ({
    type: UserActionTypes.SET_PROFILE_IMAGE,
    payload 
})

export { setProfileImage }