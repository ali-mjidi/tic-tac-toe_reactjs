import editIcon from "./../../assets/icons/edit.png";
import "./style.css";

function Player({ children: name, symbol, isActive }) {
    return (
        <div className={`player ${symbol} ${isActive ? "active" : ""}`}>
            <span className="player__symbol">{symbol}</span>
            <span className="player__name">
                {name}
                <img className="player__edit" src={editIcon} />
            </span>
        </div>
    );
}

export default Player;
