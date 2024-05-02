import "./style.css";

function GameBoard({ gameLogs, changeLogs, gameBoard }) {
    let player = gameLogs[0]?.player || "X";

    function togglePlayer() {
        player = player === "X" ? "O" : "X";
    }

    function squareHandler(rowIndex, colIndex) {
        changeLogs(oldLogs => {
            const newLog = [{ player, square: { row: rowIndex, col: colIndex } }, ...oldLogs];
            return newLog;
        });

        togglePlayer();
    }

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
                                        onClick={() => squareHandler(rowIndex, colIndex)}
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
