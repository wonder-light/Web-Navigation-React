import MainContext from "../assets/js/MainContext";
import { useState } from "react";

function WebHeader() {
    //狭窄的屏幕控
    let [show] = useState(true);
    let scroll = (id) => document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    return (
        <MainContext.Consumer>
            {value => (
                <header className={show ? 'home-header' : 'show'}>
                    <div className="logo">
                        <a href="/">{'nianian'.toUpperCase() /*Logo*/}</a>
                    </div>
                    <div className="type-list">
                        {value.nav.map(obj => (
                            <div key={obj.key} onClick={() => scroll(obj.key)}>
                                <a>{obj.key}</a>
                            </div>
                        ))}
                    </div>
                </header>
            )}
        </MainContext.Consumer>
    );
}

export default WebHeader;