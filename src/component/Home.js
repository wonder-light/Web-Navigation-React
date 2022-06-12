import WebHeader from "./Header";
import WebNav from "./Nav";
import WebMain from "./Main";
import MainContext from "../assets/js/MainContext";
import { useContext, useState } from "react";

function Home() {
    let context = useContext(MainContext);
    let [name, method] = useState(false);
    // 显示菜单, false: 不显示, true: 显示
    context.showMenu = name;
    context.setShowMenu = method;
    
    [name, method] = useState(sessionStorage.getItem('theme') !== 'dark' ? 'light' : 'dark');
    //主题，'light' - 亮, 'dark' - 暗
    context.theme = name;
    context.setTheme = method;
    context.saveTheme = (value) => {
        value = value === true ? 'dark' : 'light';
        sessionStorage.setItem('theme', value);
        context.setTheme(value);
    };
    
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
        <MainContext.Provider value={context}>
            <div className="App">
                <WebHeader/>
                <div className="main-body">
                    <WebNav/>
                    <WebMain/>
                    <footer style={{height: '50px'}}>
                    </footer>
                </div>
            </div>
        </MainContext.Provider>
    );
}

export default Home;