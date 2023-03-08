import { useContext, useState } from "react";
import MainContext from "../api/MainContext";
import WebHeader from "./Header";
import WebMain from "./Main";
import WebNav from "./Nav";

export default function Home() {
    let context = useContext(MainContext);
    let [name, method] = useState(false);
    // 显示菜单, false: 不显示, true: 显示
    context.showMenu = name;
    context.setShowMenu = method;
    
    function saveTheme(theme) {
        let body = document.getElementsByTagName('body')[0];
        body.className = theme === 'light' ? 'theme-light' : 'theme-dark';
    }
    
    [name, method] = useState(sessionStorage.getItem('theme') !== 'dark' ? 'light' : 'dark');
    //主题，'light' - 亮, 'dark' - 暗
    context.theme = name;
    context.setTheme = method;
    context.saveTheme = (value) => {
        value = value === true ? 'dark' : 'light';
        sessionStorage.setItem('theme', value);
        context.setTheme(value);
        saveTheme(value);
    };
    saveTheme(context.theme);
    
    [name, method] = useState(window.innerWidth <= 950);
    //狭窄的屏幕控
    context.narrow = name;
    context.setNarrow = method;
    window.addEventListener('resize', () => context.setNarrow(window.innerWidth <= 950));
    
    //设置 "返回到顶部" 按钮的显示与隐藏
    let [showGoBack, setShowGoBack] = useState(false);
    window.onscroll = () => {
        //返回顶部
        let old = showGoBack;
        let v = (document.documentElement.scrollTop || document.body.scrollTop) > 300;
        setShowGoBack(v);
        if (old === v) return;
        let e = document.getElementById('scroll_top');
        e.className = v ? 'scroll_top hidden-to-show' : 'scroll_top show-to-hidden';
    };
    
    return (
        <MainContext.Provider value={ context }>
            <div className="App">
                <WebHeader/>
                <div className="main-body">
                    <WebNav/>
                    <WebMain/>
                    <footer style={ { height: '50px' } }/>
                </div>
            </div>
        </MainContext.Provider>
    );
}
