import {ErrorPage, FundraisingStoryPage, FundraisingsPage, HomePage} from "./pages";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage />
                }
            />
            <Route
                path="/fundraisings/now"
                element={
                    <FundraisingsPage />
                }
            />
            <Route
                path="/fundraisings/:campaignId/story"
                element={
                    <FundraisingStoryPage />
                }
            />
            <Route
                path="/hello/:helloId/story"
                element={
                    <FundraisingStoryPage />
                }
            />

            <Route
                path="/error" 
                element={
                    <ErrorPage />
                }
            />
        </Routes>
    )
}

export default Router;