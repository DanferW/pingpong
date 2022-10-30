import React, {useEffect, useState} from "react";
import {getUsers} from "../api/users.api";

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
            <h1>Players</h1>
            <div className="users-list">
                {
                users.map(users => (
                    <div className="user">
                        <h3 className="user-name">{users.name}</h3>
                        <p className="user-games">Games played: {users.games}</p>
                        <p className="user-wins">Wins: {users.wins}</p>
                    </div>
                ))
                }
            </div>
        </div>
    </div>
    )
        
    
}

export default ListUsers;