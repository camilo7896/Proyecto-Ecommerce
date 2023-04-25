import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RouterLayaut } from "./common/RouterLayout";

export const AppRouter: React.FC<{}> = ()=>{
    return(
        <Routes>
            <Route path="/" element={<RouterLayaut/>}>
                <Route path="/" element={<HomePage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}