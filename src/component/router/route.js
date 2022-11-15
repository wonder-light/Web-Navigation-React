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
    let rootPath = '/Web-Navigation-React';
    while (path.length > 0) {
        route = route[path.shift()] ?? [];
    }
    if (!route || route.length <= 0) {
        return;
    }
    route.forEach(T => T.path = rootPath + T.path);
    function getRoute(item) {
        return (<Route key={ item.path } path={ item.path } exact element={ item.component }/>);
    }
    return <Routes>
        { route.map(getRoute) }
    </Routes>;
}

export default MainRoute;
