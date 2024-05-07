import { useState } from "react";

import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

import { WINNING_CONDITIONS } from "./winning_conditions";
import "./App.css";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(logs) {
    const activePlayer = logs.length > 0 && logs[0].player === "X" ? "O" : "X";

    return activePlayer;
}

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

function checkWinner(board) {
    for (const condition of WINNING_CONDITIONS) {
        const firstSquare = board[condition[0].row][condition[0].column];
        const secondSquare = board[condition[1].row][condition[1].column];
        const thirdSquare = board[condition[2].row][condition[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            return firstSquare;
        }
    }
}

function App() {
    const [logs, setLogs] = useState([]);
    const activePlayer = deriveActivePlayer(logs);
    let gameBoard = [...initialBoard.map(innerArray => [...innerArray])];
    let winner = undefined;
    let isDraw = logs.length === 9 && !winner;

    gameBoard = updateBoard(logs, gameBoard);
    winner = checkWinner(gameBoard);

    function resetHandler() {
        setLogs([]);
    }

    if (winner || isDraw) {
        alert(winner);
    }

    return (
        <>
            <Header onReset={resetHandler} />

            <GameBoard gameLogs={logs} changeLogs={setLogs} gameBoard={gameBoard} />

            <footer className="playersInfo">
                <Player symbol="X" isActive={activePlayer === "X"}>
                    Player 1
                </Player>
                <Player symbol="O" isActive={activePlayer === "O"}>
                    Player 2
                </Player>
            </footer>
        </>
    );
}

export default App;
