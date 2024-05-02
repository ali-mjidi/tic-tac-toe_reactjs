import { useState } from "react";
import "./style.css";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function GameBoard() {
    const [board, setBoard] = useState(initialBoard);

    function squareHandler(rowIndex, colIndex) {
        setBoard(prevBoard => {
            const newBoard = [...prevBoard.map(innerArray => [...innerArray])];
            newBoard[rowIndex][colIndex] = "X";
            return newBoard;
        });
    }

    return (
        <div className="gameBoard">
            <ol className="row">
                {board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="col">
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button
                                        className={`square ${col || ""}`}
                                        onClick={() => squareHandler(rowIndex, colIndex)}>
                                        {col}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default GameBoard;
