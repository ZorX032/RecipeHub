import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl text-red-500">404 - Not Found</h1>
            <p className="mt-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Home</Link>
        </div>
    );
};

export default NotFound;