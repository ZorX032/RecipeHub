

import HomePageAuth from "../pages/HomePageAuth.tsx";
import {Outlet} from "react-router-dom";



export const MainLayout = () => {
    return (
        <>
            <HomePageAuth/>
            <br/>
            <Outlet/>

        </>
    );
};