import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUserWithTokens } from "../models/IUserWithTokens.ts";

import { getUserById, getUserRecipes } from "../api/getUsers.ts";
import RecipeCard from "../components/RecipeCard.tsx";
import {IRecipe} from "../models/IRecipe.ts";

const UserDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<IUserWithTokens | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getUserById(Number(id))
                .then((userData) => setUser(userData))
                .catch((error) => console.error("Error fetching user details:", error));

            getUserRecipes(Number(id))
                .then((recipesData) => setRecipes(recipesData))
                .catch((error) => console.error("Error fetching user recipes:", error))
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>User not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded bg-white">
            <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mx-auto" />
            <h1 className="text-2xl font-bold text-center">
                {user.firstName} {user.lastName}
            </h1>
            <p className="text-center text-gray-600">ID: {user.id}</p>
            <p className="text-center text-gray-600">{user.email}</p>
            <p className="text-center text-gray-600">{user.phone}</p>
            <p className="text-center text-gray-600">Address: {user.address.city}, {user.address.street}</p>

            {}
            <h2 className="text-xl font-bold mt-6">User Recipes</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default UserDetailsPage;