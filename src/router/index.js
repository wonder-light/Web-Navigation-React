import Home from "../component/Home";
import Page404 from '../component/pages/Page404'

/**
 * @type {import('react-router-dom').RouteObject[]}
 */
const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '*',
        element: <Page404/>
    },
];

export default routes;
