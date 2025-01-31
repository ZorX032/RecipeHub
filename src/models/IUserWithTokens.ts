export interface IUserWithTokens {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
    address: {
        city: string;
        street: string;
        number: number;
    };
}