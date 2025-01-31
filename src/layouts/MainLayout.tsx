

import Home from "../pages/Home.tsx";
import {Outlet} from "react-router-dom";



export const MainLayout = () => {
    return (
        <>
            <Home/>
            <br/>
            <Outlet/>

        </>
    );
};