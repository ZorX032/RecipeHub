import {IUserWithTokens} from "./IUserWithTokens.ts";

export interface AuthResponse {
    accessToken: string; // Лучше назвать accessToken
    user: IUserWithTokens;
    isAuthenticated: boolean;
}

export interface AuthRequest {
    username: string;
    password: string;
    expiresInMins: number;
}