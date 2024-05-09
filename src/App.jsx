import { useState } from "react";

import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import GameOver from "./components/GameOver/GameOver";

import { WINNING_CONDITIONS } from "./winning_conditions";
import "./App.css";

const PLAYERS = {
    X: "Player 1",
    O: "Player 2",
};
const INITIAL_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(logs) {
    const activePlayer = logs.length && logs[0].player === "X" ? "O" : "X";

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

function checkWinner(board, players) {
    for (const condition of WINNING_CONDITIONS) {
        const firstSquare = board[condition[0].row][condition[0].column];
        const secondSquare = board[condition[1].row][condition[1].column];
        const thirdSquare = board[condition[2].row][condition[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            return players[firstSquare];
        }
    }
}

function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [logs, setLogs] = useState([]);
    const activePlayer = deriveActivePlayer(logs);
    let gameBoard = [...INITIAL_BOARD.map(innerArray => [...innerArray])];
    let winner = undefined;
    let isDraw = logs.length === 9 && !winner;

    gameBoard = updateBoard(logs, gameBoard);
    winner = checkWinner(gameBoard, players);

    function resetHandler() {
        setLogs([]);
    }

    function changeNameHandler(newName, symbol) {
        setPlayers(oldPlayers => ({ ...oldPlayers, [symbol]: newName }));
    }

    function squareHandler(rowIndex, colIndex) {
        setLogs(oldLogs => {
            const currentPlayer = deriveActivePlayer(oldLogs);

            const newLog = [
                { player: currentPlayer, square: { row: rowIndex, col: colIndex } },
                ...oldLogs,
            ];

            return newLog;
        });
    }

    return (
        <>
            <Header onReset={resetHandler} />

            <GameBoard onSelect={squareHandler} gameBoard={gameBoard} />
            {(winner || isDraw) && <GameOver winner={winner} resetFunction={resetHandler} />}

            <footer className="playersInfo">
                <Player symbol="X" isActive={activePlayer === "X"} onChangeName={changeNameHandler}>
                    {players.X}
                </Player>
                <Player symbol="O" isActive={activePlayer === "O"} onChangeName={changeNameHandler}>
                    {players.O}
                </Player>
            </footer>
        </>
    );
}

export default App;
