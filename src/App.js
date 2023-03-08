import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from './component/pages/Page404'
import routes from "./router";

export default function App() {
    const router = createBrowserRouter(routes, {})
    return <RouterProvider fallbackElement={ <Page404/> } router={ router }/>
}
