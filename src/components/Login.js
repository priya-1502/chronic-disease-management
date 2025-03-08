import React from "react";
import '../App.css'
import { useState } from "react";
 
function Login() {
  
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  

  return (
    <>
    <div>
        <div className="samplelogin">
          <h1 className="marginleft">Login</h1>
        </div>
        <div className="formalign">
         <form className="App">
          
          <div className="marginconstant">
            <label>Username</label><span className="mandtory">*</span> <input onChange={(e)=> setUsername(e.target.value)} type="text" />
         </div>
         <div className="marginconstant">
            <label>Password</label><span className="mandtory">*</span> <input onChange={(e)=> setPassword(e.target.value)}  type="text" />
          </div>
        <div> <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} /></div>
          </form>
          </div>

    </div>
    </>
  );

}
export default Login;