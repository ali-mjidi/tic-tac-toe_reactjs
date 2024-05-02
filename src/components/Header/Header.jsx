import "./style.css";

function Header() {
    return (
        <header className="header">
            <div className="header__logo logo">
                <img src="logo.png" alt="tic-tac-toe logo" className="logo__image" />
                <h1 className="logo__title">
                    tic tac toe <br />
                    (XO) game
                </h1>
            </div>
            <div className="header__buttons">
                <button className="aboutBtn">About</button>
                <button className="resetBtn">Reset</button>
            </div>
        </header>
    );
}

export default Header;
