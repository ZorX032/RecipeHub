
import { Link } from "react-router-dom";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {FC} from "react";

interface UserCardProps {
    user: IUserWithTokens;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
    return (
        <Link to={`${user.id}`} className="block p-4 border rounded shadow-md bg-white">
            <img src={user.image} alt={user.firstName} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-lg font-bold text-center">{user.firstName} {user.lastName}</h3>
            <p className="text-center text-gray-600">{user.email}</p>
        </Link>
    );
};

export default UserCard;