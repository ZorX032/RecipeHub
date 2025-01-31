import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; //
import UserCard from "../components/UserCard";
import { AppDispatch, RootState } from "../redux/slices/store.ts";
import { fetchUsers } from "../redux/slices/usersSlice.ts";
import SearchBar from "../components/SearchBar.tsx";
import Pagination from "../components/Pagination.tsx";

const UsersListPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading } = useSelector((state: RootState) => state.users);

    const [searchParams, setSearchParams] = useSearchParams(); //
    const page = Number(searchParams.get("page")) || 1; //
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        dispatch(fetchUsers({ page, searchQuery }));
    }, [dispatch, page, searchQuery]);

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString(), search: searchQuery });
    };

    const handleSearch = (query: string) => {
        setSearchParams({ page: "1", search: query });
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Users</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-3 grid-rows-4 gap-4">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <Pagination currentPage={page} totalPages={10} onPageChange={handlePageChange} />
        </div>
    );
};

export default UsersListPage;