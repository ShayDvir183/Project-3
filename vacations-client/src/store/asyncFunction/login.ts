import { store } from "..";
import { getTokenLS, setTokenLS, setRoleLS } from "../ls";
import { setUser } from "../reducers/authReducer";
import { login } from "../services/loginService";



export interface IUserLogin {
    user_name: string | undefined;
    password: string | undefined;
}

export async function loginAction(user: IUserLogin): Promise<any> {
    const isTokenExists = getTokenLS();
    if (isTokenExists) {
        return
    }
    try {
        const loginRes = await login(user)
        setTokenLS(loginRes.token)
        setRoleLS(loginRes.role)
    } catch (error) {

    } finally {
    }
}