import {useEffect} from "react";
import {getRecipes, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {
        getRecipes().then(products => {
            console.log(products)
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => getRecipes())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};