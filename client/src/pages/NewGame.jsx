import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { saveUser } from "../api/users.api";
import "../App.css";

function NewGame(){
    return (
        <div className="container">
        <div className="box">
        <Link to={"/"} className="backLink">
            <button className="backButton"> Back </button>
        </Link>
            <h1>New Game</h1>
            <div className="player-form">
                <Formik
                    initialValues={{
                        player1: "",
                        player2: ""
                    }}
                    onSubmit={async (values, actions) => {
                        try {
                            const response = await saveUser(values);
                            console.log(response);
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="ngContent">
                                    <h2>Player 1</h2>
                                    <input 
                                        className="player-input"
                                        type="text" 
                                        name="player1" 
                                        placeholder="Write a name"
                                        onChange={handleChange}
                                        value={values.player1}
                                    />
                                </div>
                                <div className="ngContent">
                                    <h2>Player 2</h2>
                                    <input
                                        className="player-input"
                                        type="text" 
                                        name="player2" 
                                        placeholder="Write a name"
                                        onChange={handleChange}
                                        value={values.player2}
                                    />
                                    <br />
                                    <button type="submit" id="sv-players"> Save players </button>
                                </div>
                                <div className="ngContent">
                                    <Link to="/game" state={values}>
                                        <button className="linkButton"> Continue </button>
                                    </Link>
                                </div>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>
    </div>
    )
        
    
}

export default NewGame;