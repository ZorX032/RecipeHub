import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {AuthState} from "../models/states/AuthState.ts";
import {logout} from "../redux/slices/authSlice.ts";


const Navbar = () => {

    const user = useSelector((state: { auth: AuthState }) => state.auth.user);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(user)
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <Link to="/home" className="text-lg font-bold">Home</Link>
            {user ? (
                <div className="relative">
                    <button
                        className="flex items-center px-4 py-2 bg-blue-800 rounded-lg"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img src={user.image} alt="Avatar" className="w-8 h-8 rounded-full mr-2"/>
                        {user.firstName}
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                            <Link to="users" className="block px-4 py-2 hover:bg-gray-200">Users</Link>
                            <Link to="recipes" className="block px-4 py-2 hover:bg-gray-200">Recipes</Link>
                            <Link to={`users/${user.id}`} className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                onClick={() => dispatch(logout())}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="login" className="px-4 py-2 bg-blue-800 rounded-lg">Login</Link>
            )}
        </nav>
    );
};
export default Navbar;