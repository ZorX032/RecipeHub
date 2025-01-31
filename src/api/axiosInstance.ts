import axios from "axios";
import {retriveLocalStorage} from "./helpers.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";


const api = axios.create({
    baseURL: "https://dummyjson.com",
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

export default api;