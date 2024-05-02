import Header from "./components/Header";

import "./App.css";
import editIcon from "./assets/icons/edit.png";

function App() {
    return (
        <>
            <Header />
        
            <div className="gameBoard">
                <ol className="row">
                    <li>
                        <ol className="col">
                            <li>
                                <button className="square o">O</button>
                            </li>
                            <li>
                                <button className="square"></button>
                            </li>
                            <li>
                                <button className="square"></button>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <ol className="col">
                            <li>
                                <button className="square"></button>
                            </li>
                            <li>
                                <button className="square x">X</button>
                            </li>
                            <li>
                                <button className="square"></button>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <ol className="col">
                            <li>
                                <button className="square"></button>
                            </li>
                            <li>
                                <button className="square"></button>
                            </li>
                            <li>
                                <button className="square"></button>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>

            <footer className="playersInfo">
                <div className="player player1 ">
                    <span className="player__symbol">X</span>
                    <span className="player__name">
                        Player 1
                        <img className="player__edit" src={editIcon} />
                    </span>
                </div>
                <div className="player player2 active">
                    <span className="player__symbol">O</span>
                    <span className="player__name">
                        Player 2
                        <img className="player__edit" src={editIcon} />
                    </span>
                </div>
            </footer>
        </>
    );
}

export default App;
