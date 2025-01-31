import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import {AppDispatch, RootState} from "../redux/slices/store.ts";
import {fetchRecipes} from "../redux/slices/resipesSlice.ts";

const RecipesListPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { recipes, loading } = useSelector((state: RootState) => state.recipes);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("")


    useEffect(() => {
        dispatch(fetchRecipes({page, searchQuery}));
    }, [dispatch, page, searchQuery]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Recipes</h1>
            <SearchBar onSearch={setSearchQuery}/>
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="p-4 border rounded bg-white">
                        <h2 className="text-lg font-bold">{recipe.name}</h2>
                        <p className="text-gray-600">{recipe.tags.join(", ")}</p>
                    </Link>
                ))}
            </div>
            <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
        </div>
    );
};

export default RecipesListPage;
