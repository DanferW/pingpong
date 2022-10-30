import { useState } from "react";
import { useLocation } from "react-router-dom";
import { saveGame } from "../api/games.api";
import { updateUser } from "../api/users.api";
import { Link } from "react-router-dom";

function Game() {
    const [p1wins, setP1wins] = useState(0);
    const [p2wins, setP2wins] = useState(0);
    const [winner, setWinner] = useState("Draw");
    const [winDiff, setWinDiff] = useState(0);
    const location = useLocation();

    function addWinP1() {
        setP1wins(p1wins + 1);
    }
    function addWinP2() {
        setP2wins(p2wins + 1);
    }
    function changeWinner() {
        if (p1wins > p2wins) {
            setWinner(location.state.player1);
            setWinDiff((p1wins - p2wins) + 1);
            console.log(winDiff);
        } else {
            setWinner(location.state.player2);
            setWinDiff((p2wins - p1wins) + 1);
            console.log(winDiff);

        }
    }
    function svGame() {
        saveGame({
            "player1": location.state.player1,
            "player2": location.state.player2,
            "winner": winner,
        });
    }
    function upUser() {
        updateUser({
            "player1": location.state.player1,
            "player2": location.state.player2,
            "p1wins": p1wins,
            "p2wins": p2wins,
        });
    }
    return (
        <div className="container">
            <div className="box">
                <Link className="backLink" to={"/newgame"}>
                    <button className="backButton"> Back </button>
                </Link>
                <div id="game-box">
                    <div className="game-players">
                        <p className="player-name">{location.state.player1}</p>
                        <button className="add-win" onClick={() => {
                            addWinP1();
                            changeWinner();
                        }}
                        >Add win</button>
                        <p className="player-wins">Wins: {p1wins}</p>
                    </div>
                    <div className="game-players">
                        <p className="player-name">{location.state.player2}</p>
                        <button className="add-win" onClick={() => {
                            addWinP2();
                            changeWinner();
                        }}>Add win</button>
                        <p className="player-wins">Wins: {p2wins}</p>
                    </div>
                    <hr style={{width:"100%"}}/>
                    <div id="current-winner">
                        <p>Current winner: {winner} by {winDiff}</p>
                    </div>
                    <button className="linkButton" onClick={() => {
                        svGame();
                        upUser();
                    }}>Save game</button>
                </div>
            </div>
        </div>
    )


}

export default Game;