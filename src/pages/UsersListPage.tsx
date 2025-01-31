import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserCard from "../components/UserCard";
import {AppDispatch, RootState} from "../redux/slices/store.ts";
import {fetchUsers} from "../redux/slices/usersSlice.ts";
import SearchBar from "../components/SearchBar.tsx";
import Pagination from "../components/Pagination.tsx";

const UsersListPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading } = useSelector((state: RootState) => state.users);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(fetchUsers({ page, searchQuery }));
    }, [dispatch, page, searchQuery]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);


    console.log(users.length)



    return (
        <div>
            <h1 className="text-2xl font-bold">Users</h1>
            <SearchBar onSearch={setSearchQuery} />
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-3 grid-rows-4 gap-4">
                {users.map((user) => <UserCard key={user.id} user={user} />)}

            </div>
            <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
        </div>
    );
};

export default UsersListPage;
