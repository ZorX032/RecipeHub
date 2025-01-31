import {createBrowserRouter} from "react-router-dom";


import LoginPage from "../pages/LoginPage.tsx";
import Home from "../pages/Home.tsx";



export const routes = createBrowserRouter([
    {
        path: '', element: <Home/>, children:[
            {path: 'login', element:<LoginPage/>},

        ]
    }
])