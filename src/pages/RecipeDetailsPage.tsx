import {useEffect, useState} from "react";

import { useParams } from "react-router-dom";

import {IRecipe} from "../models/IRecipe.ts";
import {getRecipeById} from "../api/getRecipes.ts";



const RecipeDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<IRecipe | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getRecipeById(Number(id))
                .then((recipeData) => {
                    setRecipe(recipeData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching recipe details:", error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">{recipe.name}</h1>
            <p>{recipe.description}</p>
            <p className="font-bold">Ingredients:</p>
            <ul>
                {recipe.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetailsPage;
