import {IUserWithTokens} from "../IUserWithTokens.ts";

export interface UsersState {
    users: IUserWithTokens[];
    selectedUser: IUserWithTokens | null;
    loading: boolean;
    error: string | null;
}

export const initialState: UsersState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
};

