import React from "react";
import '../App.css'
import { useState } from "react";
 
function Login() {
  
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  
  return (
    <>
    <div className="flex justify-center relative top-30">
       
          <h1 >Login</h1>
        
        <div >
         <form className="App">
          
          <div className="marginconstant">
            <label>Username</label><span className="mandtory">*</span> 
            <input onChange={(e)=> setUsername(e.target.value)} type="text" />
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