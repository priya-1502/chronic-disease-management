import React from "react";
import '../App.css'
import { useState } from "react";
import logo from '../images/login.png'
import { Link } from "react-router";
 
function Login() {
  
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  

  return (
    <>
    <div>
          <div classname="flex justify-center">
        <img   class="mx-auto  w-32 h-32" src={logo} alt="image description"/>
        </div>

          <h1 className="text-xl font-bold flex justify-center">Login</h1>

     
        <div >
         <form className="App">

          <div className="marginconstant">

           <input placeholder="Username" onChange={(e)=> setUsername(e.target.value)} type="text" className="border-1" />

         </div>
         <div className="marginconstant">
          <input placeholder="Password" onChange={(e)=> setPassword(e.target.value)}  type="text" className="border-1"  />
          </div>
        <div>
          
           <input type={"submit"} style={{ backgroundColor: "#a1eafb" }}  className="p-1 mx-5 mb-5" />

          <div>
          <Link to="/forgotPassword"> Forgot Password ?</Link>
          </div>

          <p> New User ?<Link to="/register"> Register Here </Link>  </p>
        
        </div>
          </form>
          </div>

    </div>
    </>
  );

}
export default Login;