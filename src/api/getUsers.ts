import api from "./axiosInstance";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";


export const getUsers = async (limit = 120, skip = 0): Promise<IUserWithTokens[]> => {
    const response = await api.get(`/users?limit=${limit}&skip=${skip}`);
    return response.data.users;
};

export const getUserById = async (id: number): Promise<IUserWithTokens> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};
