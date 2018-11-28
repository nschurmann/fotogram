import { Dispatch } from "redux";
import { IServices } from '../Services'
import { ILogin } from '../Models/LoginModel';
import * as UserActions from '../Actions/UserActions'
import { IState } from "../Models/State";



export const login = ({ email, password }: ILogin) => async (dispatch: Dispatch, getState: () => IState, { auth }: IServices) =>
    await auth.signInWithEmailAndPassword(email, password)

export const register = ({ email, password }: ILogin) => async (dispatch: Dispatch, getState: () => IState, { auth, db }: IServices) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password)
    const { user } = userCredential
    const id = user ? user.uid : undefined
    const doc = db.collection('users').doc(id)
    await doc.set({ role: 'user' })
}

export const loadUserInitialData = () =>
    async (dispatch: Dispatch, getState: IState, { auth, storage }: IServices) => {
        if (!auth.currentUser) {
            return
        }
        const storageRef = storage.ref()
        const { uid } = auth.currentUser
        const imageRef = storageRef
            .child('profileImages')
            .child(`${uid}.jpg`)

        const url = await imageRef.getDownloadURL()
        dispatch(UserActions.setProfileImage(url))
    }

export const handleProfileImageSubmit = (payload: { file: File }) =>
    async (dispatch: Dispatch, getState: () => IState, { auth, storage }: IServices) => {
        if (!auth.currentUser) {
            return
        }
        const storageRef = storage.ref()
        const { uid } = auth.currentUser
        const response = await storageRef
            .child('profileImages')
            .child(`${uid}.jpg`)
            .put(payload.file)

        const url = await response.ref.getDownloadURL()
        dispatch(UserActions.setProfileImage(url))
    }