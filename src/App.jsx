import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

import "./App.css";

function App() {
    return (
        <>
            <Header />

            <GameBoard />

            <footer className="playersInfo">
                <Player symbol="X" isActive={true}>
                    Player 1
                </Player>
                <Player symbol="O" isActive={false}>
                    Player 2
                </Player>
            </footer>
        </>
    );
}

export default App;
