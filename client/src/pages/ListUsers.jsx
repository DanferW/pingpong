import React, {useEffect, useState} from "react";
import {getUsers} from "../api/users.api";
import { Link } from "react-router-dom";

function ListUsers(){

    const [users, setUsers] = useState([]);
    useEffect( () =>{
        async function loadUsers() {
            const response = await getUsers()
            setUsers(response.data);
        }
        loadUsers();
    }, []);

    return (
        <div className="container">
        <div className="box">
            <Link className="backLink" to={"/"}>
                <button className="backButton"> Back </button>
            </Link>
            <h1>Players</h1>
            <div className="users-list" style={{
                scrollbarColor: '#5941A9 transparent'
            }}>
                {
                users.map(users => (
                    <div className="user">
                        <h3 className="user-name">{users.name}</h3>
                        <p className="user-games">Games played: {users.games}</p>
                        <p className="user-wins">Wins: {users.wins}</p>
                        <hr />
                    </div>
                ))
                }
            </div>
        </div>
    </div>
    )
        
    
}

export default ListUsers;