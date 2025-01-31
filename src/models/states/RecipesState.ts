import {IRecipe} from "../IRecipe.ts";

export interface RecipesState {
    recipes: IRecipe[];
    selectedRecipe: IRecipe | null;
    loading: boolean;
    error: string | null;
}

export const initialState: RecipesState = {
    recipes: [],
    selectedRecipe: null,
    loading: false,
    error: null,
};