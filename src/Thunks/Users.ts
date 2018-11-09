import { Dispatch } from "redux";
import { IServices } from '../Services'
//import { ILogin } from '../Models/LoginModel';

export interface ILogin {
    email: string
    password: string
}

export const login = ({ email, password}: ILogin) => async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
    const result = await auth.signInWithEmailAndPassword(email, password)
    console.log(result)
}