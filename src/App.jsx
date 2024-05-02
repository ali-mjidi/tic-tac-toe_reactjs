import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

import "./App.css";
import editIcon from "./assets/icons/edit.png";

function App() {
    return (
        <>
            <Header />
        
            <GameBoard />

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
