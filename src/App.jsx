import { useState } from "react";

import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

import "./App.css";

function App() {
    const [player, setPlayer] = useState("X");

    return (
        <>
            <Header />

            <GameBoard currentPlayer={player} setPlayer={setPlayer} />

            <footer className="playersInfo">
                <Player symbol="X" isActive={player === "X"}>
                    Player 1
                </Player>
                <Player symbol="O" isActive={player === "O"}>
                    Player 2
                </Player>
            </footer>
        </>
    );
}

export default App;
