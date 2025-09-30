import {ErrorPage, StoryPage, HomePage} from "./pages";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminEditorPage from './pages/AdminEditorPage';
import AdminPage from './pages/AdminPage';

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
                path="/fundraisings/:fundraisingId/story"
                element={
                    <StoryPage />
                }
            />
          <Route
            path="/admin"
            element={
              <AdminPage />
            }
          />
          <Route
            path="/admin/fundraisings/editor"
            element={
              <AdminEditorPage />
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