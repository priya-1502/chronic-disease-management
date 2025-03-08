import React from "react";
import "./App.css";

function Login() {
    return (
        <>
            <p className="title">Registration Form</p>

            <form className="App">
              <label>Patient's Name : <label/>  <input type="text" />
		<label>Patient's Date : <label/>
                <input type="email" />
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}

export default Login;