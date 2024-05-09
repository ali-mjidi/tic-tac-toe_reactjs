import "./style.css";

function GameBoard({ onSelect, gameBoard }) {
    return (
        <div className="gameBoard">
            <ol className="row">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="col">
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button
                                        className={`square ${col || ""}`}
                                        onClick={() => onSelect(rowIndex, colIndex)}
                                        disabled={Boolean(col)}>
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
