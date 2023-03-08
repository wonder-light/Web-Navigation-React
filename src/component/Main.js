import MainContext from "../api/MainContext";

export default function WebMain() {
    return (
        <MainContext.Consumer>
            { value => (
                <div className="main-content">
                    { value.nav.map(obj => (
                        <div key={ obj.key }>
                            <div id={ obj.key } className="nav-title">{ obj.key }</div>
                            <div className="layout">
                                { obj.value.map(T => (
                                    <div key={ T.url }>
                                        <a href={ T.url } title={ T.tooltip } target="_blank" rel="noreferrer">
                                            <img src={ T.icon } alt={ T.title + '的图标' }/>
                                            <p>{ T.title }</p>
                                        </a>
                                    </div>
                                )) }
                            </div>
                        </div>
                    )) }
                </div>
            ) }
        </MainContext.Consumer>
    );
}
