import {IUserWithTokens} from "./IUserWithTokens.ts";

export interface AuthResponse {
    accessToken: string;
    user: IUserWithTokens;
    isAuthenticated: boolean;
}

export interface AuthRequest {
    username: string;
    password: string;
    expiresInMins: number;
}