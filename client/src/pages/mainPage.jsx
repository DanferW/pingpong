import { Link } from "react-router-dom";


function MainPage(){
    return (
    <div className="container">
        <div className="box">
            <h1>PingPong</h1>
            <div className="content">
                <div>
                    <Link to={"/newgame"}>
                        <button  className="linkButton"> Play </button>
                    </Link>
                </div>
                <div>
                    <Link to={"/users"}>
                        <button  className="linkButton"> View players </button>
                    </Link>
                </div>
                <div>
                    <Link to={"/games"}>
                        <button  className="linkButton"> View games </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
        
    
}

export default MainPage;