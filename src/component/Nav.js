import { useState } from "react";

function WebNav() {
    
    let [checked, setChecked] = useState(sessionStorage.getItem('theme') === 'true');
    let [show, setShow] = useState(false);
    let [narrow, setNarrow] = useState(window.innerWidth <= 950);
    let onChecked = (value) => {
        sessionStorage.setItem('theme', value);
        setChecked(value);
    };
    let scroll = (id) => document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    window.onscroll = () => {
        //返回顶部
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let old = show;
        let v = scrollTop > 280;
        setShow(v);
        if (old === v) return;
        let e = document.getElementById('scroll_top');
        e.className = v ? 'scroll_top hidden-to-show' : 'scroll_top show-to-hidden';
    };
    
    window.addEventListener('resize', () => setNarrow(window.innerWidth <= 950));
    
    return (
        narrow?(
            <div style={{width:'100%'}}>
                <nav className="main-nav" id="main-nav">
                    <div className="main-nav-up">
                        <div className="logo">
                            <a href="/">{'nianian'.toUpperCase() /*Logo*/}</a>
                        </div>
                        <div>
                            <svg t="1655019088595" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="2659" width="200" height="200">
                                <path
                                    d="M867.995 459.647h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z"
                                    p-id="2660" fill="#2c2c2c"></path>
                                <path
                                    d="M867.995 763.291h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z"
                                    p-id="2661" fill="#2c2c2c"></path>
                                <path
                                    d="M156.005 260.709h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353z"
                                    p-id="2662" fill="#2c2c2c"></path>
                            </svg>
                        </div>
                    </div>
                    <div id="scroll_top" className="scroll_top" onClick={() => scroll('main-nav')}>
                        <svg t="1654967035524" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="4692" width="200" height="200">
                            <path
                                d="M752.736 431.063C757.159 140.575 520.41 8.97 504.518 0.41V0l-0.45 0.205-0.41-0.205v0.41c-15.934 8.56-252.723 140.165-248.259 430.653-48.21 31.457-98.713 87.368-90.685 184.074 8.028 96.666 101.007 160.768 136.601 157.287 35.595-3.482 25.232-30.31 25.232-30.31l12.206-50.095s52.47 80.569 69.304 80.528c15.114-1.23 87-0.123 95.6 0h0.82c8.602-0.123 80.486-1.23 95.6 0 16.794 0 69.305-80.528 69.305-80.528l12.165 50.094s-10.322 26.83 25.272 30.31c35.595 3.482 128.574-60.62 136.602-157.286 8.028-96.665-42.475-152.617-90.685-184.074z m-248.669-4.26c-6.758-0.123-94.781-3.359-102.891-107.192 2.95-98.714 95.97-107.438 102.891-107.93 6.964 0.492 99.943 9.216 102.892 107.93-8.11 103.833-96.174 107.07-102.892 107.192z m-52.019 500.531c0 11.838-9.42 21.382-21.012 21.382a21.217 21.217 0 0 1-21.054-21.34V821.74c0-11.797 9.421-21.382 21.054-21.382 11.591 0 21.012 9.585 21.012 21.382v105.635z m77.333 57.222a21.504 21.504 0 0 1-21.34 21.626 21.504 21.504 0 0 1-21.34-21.626V827.474c0-11.96 9.543-21.668 21.299-21.668 11.796 0 21.38 9.708 21.38 21.668v157.082z m71.147-82.043c0 11.796-9.42 21.34-21.053 21.34a21.217 21.217 0 0 1-21.013-21.34v-75.367c0-11.755 9.421-21.299 21.013-21.299 11.632 0 21.053 9.544 21.053 21.3v75.366z"
                                fill="#1296db" p-id="4693"></path>
                        </svg>
                    </div>
                </nav>
                <div className="search-outer">
                    <div className="search">
                        <input type="search" id="site-search" name="site-search" placeholder="输入关键词搜索"/>
                        <button onClick={() => {
                            window.open('https://www.baidu.com/', '_blank');
                        }}>百度搜索
                        </button>
                    </div>
                </div>
            </div>
        ):(
            <nav className="main-nav" id="main-nav">
                <div className="search">
                    <input type="search" id="site-search" name="site-search" placeholder="输入关键词搜索"/>
                    <button onClick={() => {
                        window.open('https://www.baidu.com/', '_blank');
                    }}>百度搜索
                    </button>
                </div>
                <div className="main-nav-r">
                    <input className="switch" type="checkbox" checked={checked}
                           onChange={(v) => onChecked(v.target.checked)}/>
                </div>
                <div id="scroll_top" className="scroll_top" onClick={() => scroll('main-nav')}>
                    <svg t="1654967035524" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4692" width="200" height="200">
                        <path
                            d="M752.736 431.063C757.159 140.575 520.41 8.97 504.518 0.41V0l-0.45 0.205-0.41-0.205v0.41c-15.934 8.56-252.723 140.165-248.259 430.653-48.21 31.457-98.713 87.368-90.685 184.074 8.028 96.666 101.007 160.768 136.601 157.287 35.595-3.482 25.232-30.31 25.232-30.31l12.206-50.095s52.47 80.569 69.304 80.528c15.114-1.23 87-0.123 95.6 0h0.82c8.602-0.123 80.486-1.23 95.6 0 16.794 0 69.305-80.528 69.305-80.528l12.165 50.094s-10.322 26.83 25.272 30.31c35.595 3.482 128.574-60.62 136.602-157.286 8.028-96.665-42.475-152.617-90.685-184.074z m-248.669-4.26c-6.758-0.123-94.781-3.359-102.891-107.192 2.95-98.714 95.97-107.438 102.891-107.93 6.964 0.492 99.943 9.216 102.892 107.93-8.11 103.833-96.174 107.07-102.892 107.192z m-52.019 500.531c0 11.838-9.42 21.382-21.012 21.382a21.217 21.217 0 0 1-21.054-21.34V821.74c0-11.797 9.421-21.382 21.054-21.382 11.591 0 21.012 9.585 21.012 21.382v105.635z m77.333 57.222a21.504 21.504 0 0 1-21.34 21.626 21.504 21.504 0 0 1-21.34-21.626V827.474c0-11.96 9.543-21.668 21.299-21.668 11.796 0 21.38 9.708 21.38 21.668v157.082z m71.147-82.043c0 11.796-9.42 21.34-21.053 21.34a21.217 21.217 0 0 1-21.013-21.34v-75.367c0-11.755 9.421-21.299 21.013-21.299 11.632 0 21.053 9.544 21.053 21.3v75.366z"
                            fill="#1296db" p-id="4693"></path>
                    </svg>
                </div>
            </nav>
        )
    );
}

export default WebNav;