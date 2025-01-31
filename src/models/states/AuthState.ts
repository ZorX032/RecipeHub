import {IUserWithTokens} from "../IUserWithTokens.ts";

export interface AuthState {
    user: IUserWithTokens | null;
    token: string | null;
    isAuthenticated: boolean;
    expiresInMins: number;
}