import {createBrowserRouter} from "react-router-dom";


import LoginPage from "../pages/LoginPage.tsx";
import HomePageAuth from "../pages/HomePageAuth.tsx";



export const routes = createBrowserRouter([
    {
        path: '', element: <HomePageAuth/>, children:[
            {path: 'login', element:<LoginPage/>},

        ]
    }
])