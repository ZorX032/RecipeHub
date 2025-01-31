import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import {initialState} from "../../models/states/RecipesState.ts";
import {getRecipeById, getRecipes} from "../../api/getRecipes.ts";





// ✅ Правильный AsyncThunk (указывает правильный тип `Recipe[]`)
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes",
    async ({page, searchQuery}: { page: number; searchQuery: string }) => {
    const limit = 12;
    const skip = (page - 1) * limit;

        let recipes = await getRecipes(limit, skip);

        if (searchQuery){
            recipes = recipes.filter(recipes =>
                recipes.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipes.id.toString().includes(searchQuery));
        }
    // Должен возвращать `Recipe[]`
    return recipes // ✅ Возвращаем массив `Recipe[]`

});

export const fetchRecipeById = createAsyncThunk("recipes/fetchRecipeById",
    async (id:number) => {
        return await getRecipeById(id);
    });

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        clearSelectedRecipe: (state) => {
            state.selectedRecipe = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload; // ✅ Теперь `action.payload` имеет правильный тип `Recipe[]`
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка загрузки рецептов";
            })
            .addCase(fetchRecipeById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRecipe = action.payload;
            })
            .addCase(fetchRecipeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error loading recipe";
            });
    },
});

export const { clearSelectedRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
