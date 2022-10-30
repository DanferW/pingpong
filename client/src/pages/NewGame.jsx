import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { saveUser } from "../api/users.api";
import "../App.css";

function NewGame(){
    return (
        <div className="container">
        <div className="box">
        <Link to={"/game"} >
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
                        console.log(values);
                        try {
                            const response = await saveUser(values);
                            console.log(response);
                            actions.resetForm();
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <Form onSubmit={handleSubmit}>
                                <h2>Player 1</h2>
                                <input 
                                    type="text" 
                                    name="player1" 
                                    placeholder="Write a name"
                                    onChange={handleChange}
                                    value={values.player1}
                                />

                                <h2>Player 2</h2>
                                <input 
                                    type="text" 
                                    name="player2" 
                                    placeholder="Write a name"
                                    onChange={handleChange}
                                    value={values.player2}
                                />
                                <br></br>
                                <button type="submit"> Save players </button>
                                <br></br>
                                <Link to={"/game"} >
                                <button type="submit" className="linkButton"> Continue </button>
                                </Link>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>
    </div>
    )
        
    
}

export default NewGame;