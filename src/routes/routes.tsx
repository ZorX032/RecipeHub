import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import HomePage from "../Pages/HomePage.tsx";
import LoginPage from "../Pages/LoginPage.tsx";
import {AuthResourcesPage} from "../Pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {index:true, element: <HomePage/>},
            {path: 'login', element:<LoginPage/>},
            {path:'/auth/resources', element: <AuthResourcesPage/>}
        ]
    }
])