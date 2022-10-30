import React, {useEffect, useState} from "react";
import {getGames} from "../api/games.api";

function ListGames(){

    const [games, setGames] = useState([]);
    useEffect( () =>{
        async function loadGames() {
            const response = await getGames()
            setGames(response.data);
        }
        loadGames();
    }, []);

    return (
        <div className="container">
        <div className="box">
            <h1>Games</h1>
            <div className="games-list">
                {
                games.map((users, index) => (
                    <div className="game">
                        <h3 className="game-id">Game {index + 1}</h3>
                        <p className="players">Players: {users.players}</p>
                        <p className="winner">Winner: {users.winner}</p>
                    </div>
                ))
                }
            </div>
        </div>
    </div>
    )
        
    
}

export default ListGames;