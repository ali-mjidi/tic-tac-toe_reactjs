import editIcon from "./assets/icons/edit.png";

import "./App.css";

function App() {
    return (
        <>
            <header className="header">
                <div className="header__logo logo">
                    <img src="logo.png" alt="tic-tac-toe logo" className="logo__image" />
                    <h1 className="logo__title">
                        tic tac toe <br />
                        (XO) game
                    </h1>
                </div>
                <div className="header__buttons">
                    <button className="aboutBtn">About</button>
                    <button className="resetBtn">Reset</button>
                </div>
            </header>

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
                        <img className="player__edit" src={editIcon} alt="" />
                    </span>
                </div>
                <div className="player player2 active">
                    <span className="player__symbol">O</span>
                    <span className="player__name">
                        Player 2
                        <img className="player__edit" src={editIcon} alt="" />
                    </span>
                </div>
            </footer>
        </>
    );
}

export default App;
