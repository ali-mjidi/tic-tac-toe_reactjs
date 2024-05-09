import { useState } from "react";

import editIcon from "./../../assets/icons/edit.png";
import checkIcon from "./../../assets/icons/check.png";
import "./style.css";

function Player({ children: initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function changePlayerName(e) {
        setPlayerName(prevName => e.target.value.trim() || prevName);
    }

    function toggleIsEditing() {
        setIsEditing(wasEditing => !wasEditing);

        if (isEditing) {
            onChangeName(playerName, symbol);
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        toggleIsEditing();
    }

    return (
        <form className={`player ${symbol} ${isActive ? "active" : ""}`} onSubmit={submitHandler}>
            <span className="player__symbol">{symbol}</span>
            {!isEditing && <span className="player__name">{playerName}</span>}
            {isEditing && (
                <input
                    type="text"
                    className="changeNameInput"
                    defaultValue={playerName}
                    onChange={changePlayerName}
                />
            )}
            <img
                className={`player__edit ${isEditing ? "editing" : ""}`}
                src={isEditing ? checkIcon : editIcon}
                onClick={toggleIsEditing}
            />
        </form>
    );
}

export default Player;
