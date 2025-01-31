// Асинхронное получение всех пользователей
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserById, getUsers} from "../../api/getUsers.ts";
import {initialState} from "../../models/states/UsersState.ts";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async ({page, searchQuery}: { page: number; searchQuery: string }) => {
        const limit = 12;
        const skip = (page - 1) * limit;
        // return await getUsers(limit, skip);
        let users = await getUsers(limit, skip)
        if (searchQuery) {
            users = users.filter(user =>
                user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.id.toString().includes(searchQuery)
            );
        }
        return users;

    });


// Асинхронное получение одного пользователя по ID
export const fetchUserById = createAsyncThunk("users/fetchUserById",
    async (id: number) => {
        return await getUserById(id);
    });

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error loading users";
            })
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedUser = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error loading user";
            });
    },
});

export const {clearSelectedUser} = usersSlice.actions;
export default usersSlice.reducer;