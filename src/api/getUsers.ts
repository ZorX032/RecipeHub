import api from "./axiosInstance";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";


export const getUsers = async (limit = 200, skip = 0): Promise<IUserWithTokens[]> => {
    const response = await api.get(`/users?limit=${limit}&skip=${skip}`);
    return response.data.users;
};

export const getUserById = async (id: number): Promise<IUserWithTokens> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};
export const getUserRecipes = async (userId: number) => {
    const response = await fetch(`https://dummyjson.com/recipes/user/${userId}`);
    const data = await response.json();
    return data.recipes; // API возвращает массив рецептов в поле `recipes`
};