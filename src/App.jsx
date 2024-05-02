import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import PlayersInfo from "./components/PlayersInfo/PlayersInfo";

import "./App.css";

function App() {
    return (
        <>
            <Header />

            <GameBoard />

            <PlayersInfo />
        </>
    );
}

export default App;
