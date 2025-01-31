import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/slices/store.ts";

const HomePage = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl">Welcome, {user?.firstName}!</h1>
            <p className="mt-4 text-lg">Glad to see you back.</p>

            <div className="mt-6 flex space-x-4">
                <Link to={`users/${user.id}`} className="px-4 py-2 bg-blue-500 text-white rounded">Profile</Link>
                <Link to="/users" className="px-4 py-2 bg-green-500 text-white rounded">Users List</Link>
                <Link to="/recipes" className="px-4 py-2 bg-green-500 text-white rounded">Recipes List</Link>
                <Link to="/logout" className="px-4 py-2 bg-red-500 text-white rounded">Logout</Link>
            </div>
        </div>
    );
};

export default HomePage;