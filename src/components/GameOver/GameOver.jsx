import "./style.css";

function GameOver() {
    return (
        <div className="gameOver">
            <div className="gameOver__wrapper">
                <h2 className="gameOver__header">Game Over!</h2>
                <p className="gameOver__result">Player 1 Won!</p>
                <button className="gameOver__resetBtn">Rematch!</button>
            </div>
        </div>
    );
}

export default GameOver;
