import Player from "../Player/Player";

import "./style.css";

function PlayersInfo() {
    return (
        <footer className="playersInfo">
            <Player symbol="X" isActive={true}>
                Player 1
            </Player>
            <Player symbol="O" isActive={false}>
                Player 2
            </Player>
        </footer>
    );
}

export default PlayersInfo;
