import "./style.css";

const initialBoard = [
    [null, null, null],
    [null, "X", null],
    [null, null, "O"],
];

function GameBoard() {
    return (
        <div className="gameBoard">
            <ol className="row">
                {initialBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="col">
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button
                                        className={`square ${col || ""}`}
                                        onClick={() => alert(`${rowIndex}, ${colIndex}`)}>
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
