import { /*Switch*/Routes, Route } from "react-router-dom";
import Home from "../Home";

const routes = [
    {
        path: '/',
        component: <Home/>
    },
];

function MainRoute(props) {
    //长度为0 则匹配第一级路由；长度为二，则确定第一级路由，匹配第二级路由
    let path = props.path.concat();
    let route = routes.concat();
    while (path.length > 0) {
        route = route[path.shift()] ?? [];
    }
    if (!route || route.length <= 0) {
        return;
    }
    return (
        <Routes>
            {route.map(T => (<Route key={T.path} path={T.path} exact element={T.component}/>))}
        </Routes>
    );
}

export default MainRoute;
