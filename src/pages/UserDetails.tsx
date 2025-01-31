import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {getUserById} from "../api/getUsers.ts";


const UserDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<IUserWithTokens | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getUserById(Number(id))
                .then((userData) => {
                    setUser(userData);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching user details:", error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>User not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-4 border rounded bg-white">
            <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mx-auto" />
            <h1 className="text-2xl font-bold text-center">
                {user.firstName} {user.lastName}
            </h1>
            <p className="text-center text-gray-600">{user.email}</p>
            <p className="text-center text-gray-600">{user.phone}</p>
            <p className="text-center text-gray-600">Address: {user.address.city}, {user.address.street}</p>
        </div>
    );
};

export default UserDetails;