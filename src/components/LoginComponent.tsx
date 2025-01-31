import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../api/auth.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {setAuth} from "../redux/slices/authSlice.ts";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const authData = {
                username,
                password,
                expiresInMins: 1,

            }
            const userData: IUserWithTokens = await login(authData)
            dispatch(setAuth(userData));
            console.log("Login successful");
            navigate(`/users/${userData.id}`);
        } catch (error) {
            console.error("Login failed", error);
        }

    };

    return (
        <div className="flex flex-col items-center mt-20">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2 p-2 border rounded-lg"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-2 p-2 border rounded-lg"/>
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Login
            </button>
        </div>
    );
};

export default Login;