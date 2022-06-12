import MainContext from "../assets/js/MainContext";

function WebHeader() {
    return (
        <MainContext.Consumer>
            {value => (
                <header className={value.showMenu ? 'home-header show' : 'home-header'}>
                    <div className="logo">
                        <a href="/">{'nianian'.toUpperCase() /*Logo*/}</a>
                    </div>
                    <div className="type-list">
                        {value.nav.map(obj => (
                            <div key={obj.key} onClick={() => value.scrollTo(obj.key)}>
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