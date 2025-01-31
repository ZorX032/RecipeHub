import { Link } from "react-router-dom";
import {IRecipe} from "../models/IRecipe.ts";


interface RecipeCardProps {
    recipe: IRecipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <Link to={`/recipes/${recipe.id}`} className="block p-4 border rounded shadow-md bg-white">
            <img src={recipe.image} alt={recipe.description} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-lg font-bold text-center">{recipe.id} {recipe.id}</h3>
            <p className="text-center text-gray-600">{recipe.id}</p>
        </Link>
    );
};


export default RecipeCard;