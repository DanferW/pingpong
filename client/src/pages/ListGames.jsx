import React, {useEffect, useState} from "react";
import {getGames} from "../api/games.api";
import { Link } from "react-router-dom";

function ListGames(){

    const [games, setGames] = useState([]);
    useEffect( () =>{
        async function loadGames() {
            const response = await getGames()
            console.log(response.data);
            setGames(response.data);
        }
        loadGames();
    }, []);

    return (
        <div className="container">
        <div className="box">
        <Link className="backLink" to={"/"}>
                <button className="backButton"> Back </button>
        </Link>
            <h1>Games</h1>
            <div className="games-list"style={{
                scrollbarColor: '#5941A9 transparent'
            }}>
                {
                games.map((users, index) => (
                    <div className="game">
                        <h3 className="game-id">Game {index + 1}</h3>
                        <p className="players">Player1: {users.player1}</p>
                        <p className="players">Player2: {users.player2}</p>
                        <p className="winner">Winner: {users.winner}</p>
                        <hr />
                    </div>
                ))
                }
            </div>
        </div>
    </div>
    )
        
    
}

export default ListGames;