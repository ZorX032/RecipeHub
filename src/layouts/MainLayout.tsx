

import HomePage from "../pages/HomePage.tsx";
import {Outlet} from "react-router-dom";



export const MainLayout = () => {
    return (
        <>
            <HomePage/>
            <br/>
            <Outlet/>

        </>
    );
};