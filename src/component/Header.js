import MainContext from "../api/MainContext";

export default function WebHeader() {
    return (
        <MainContext.Consumer>
            { value => (
                <header className={ value.showMenu ? 'home-header show' : 'home-header' }>
                    <div className="logo">
                        <a href="/">{ value.title.toUpperCase() /*Logo*/ }</a>
                    </div>
                    <div className="type-list">
                        { value.nav.map(obj => (
                            <div key={ obj.key } onClick={ () => value.scrollTo(obj.key) }>
                                <a>{ obj.key }</a>
                            </div>
                        )) }
                    </div>
                </header>
            ) }
        </MainContext.Consumer>
    );
}
