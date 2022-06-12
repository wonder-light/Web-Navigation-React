import WebHeader from "./Header";
import WebNav from "./Nav";
import WebMain from "./Main";

function Home() {
    return(
        <div className="App">
            <WebHeader/>
            <div className="main-body">
                <WebNav/>
                <WebMain/>
                <footer style={{height: '50px'}}>
                </footer>
            </div>
        </div>
    );
}

export default Home;