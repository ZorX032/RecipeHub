import { Link } from "react-router-dom";

const HomePageAuth = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl">Welcome</h1>
            <p className="mt-4 text-lg">You need to <Link to="login" className="text-blue-600">authenticate</Link> to access content.</p>
        </div>
    );
};

export default HomePageAuth;