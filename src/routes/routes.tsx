import {createBrowserRouter} from "react-router-dom";


import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";



export const routes = createBrowserRouter([
    {
        path: '', element: <HomePage/>, children:[
            {path: 'login', element:<LoginPage/>},

        ]
    }
])