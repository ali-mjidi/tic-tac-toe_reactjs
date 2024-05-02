import { useState } from "react";

import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

import "./App.css";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function updateBoard(gameLogs, gameBoard) {
    for (const log of gameLogs) {
        const {
            player,
            square: { row, col },
        } = log;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
    const [logs, setLogs] = useState([]);
    let gameBoard = [...initialBoard.map(innerArray => [...innerArray])];

    gameBoard = updateBoard(logs, gameBoard);

    function resetHandler() {
        setLogs([]);
    }

    return (
        <>
            <Header onReset={resetHandler} />

            <GameBoard gameLogs={logs} changeLogs={setLogs} gameBoard={gameBoard} />

            <footer className="playersInfo">
                <Player symbol="X" isActive={logs[0] ? logs[0].player === "X" : true}>
                    Player 1
                </Player>
                <Player symbol="O" isActive={logs[0]?.player === "O"}>
                    Player 2
                </Player>
            </footer>
        </>
    );
}

export default App;
