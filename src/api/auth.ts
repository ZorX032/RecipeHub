import axiosInstance from "./axiosInstance.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {LoginData} from "../types/auth.ts";


export const login = async ({username, password, expiresInMins}:LoginData):Promise<IUserWithTokens>=>{
    const{data: userWithToken} = await axiosInstance.post<IUserWithTokens>('/auth/login', {username, password, expiresInMins });
    console.log(userWithToken);
    localStorage.setItem('user', JSON.stringify(userWithToken));
    return userWithToken;


}