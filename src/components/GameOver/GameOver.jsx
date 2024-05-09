import "./style.css";

function GameOver({ winner, resetFunction }) {
    return (
        <div className="gameOver">
            <div className="gameOver__wrapper">
                <h2 className="gameOver__header">Game Over!</h2>
                {winner && <p className="gameOver__result">{winner} Won!</p>}
                {!winner && <p className="gameOver__result">It's a draw!</p>}
                <button className="gameOver__resetBtn" onClick={resetFunction}>
                    Rematch!
                </button>
            </div>
        </div>
    );
}

export default GameOver;
