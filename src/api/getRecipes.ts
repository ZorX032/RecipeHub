import api from "./axiosInstance";
import {IRecipe} from "../models/IRecipe.ts";


export const getRecipes = async (limit = 200, skip = 0): Promise<IRecipe[]> => {
    const response = await api.get(`/recipes?limit=${limit}&skip=${skip}`);
    return response.data.recipes;
};

export const getRecipeById = async (id: number): Promise<IRecipe> => {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
};
