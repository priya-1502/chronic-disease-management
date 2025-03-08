import React from "react";
import '../App.css'
import { useState } from "react";
 
function Registration() {
  const [gender, setGender] = useState("male");
  const handleRadioChange = (
    value
  ) => {
    setGender(value);
  };
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [dob,setDob] = useState("");
  const [password,setPassword] = useState("");
  
  const handleSubmit = (event) => {
   var  body = {
    firstName: {firstname},
    lastName: {lastname},
    password :{password}
}

  }
    return (
        <>
        <div>
          <h1 className="marginleft">New Patient Registration Form</h1>
        </div>
        <div className="formalign">
         <form className="App">
          
          <div className="marginconstant">
            <label>Patient 's First Name</label><span className="mandtory">*</span> <input onChange={(e)=> setFirstname(e.target.value)} type="text" />
            </div>
            <div className="marginconstant">
            <label>Patients 's Last Name</label><span className="mandtory">*</span> <input onChange={(e)=> setLastname(e.target.value)}  type="text" />
          </div>
          <div className="marginconstant">
            <label>Patient 's Email Id :</label><span className="mandtory">*</span> <input onChange={(e)=> setEmail(e.target.value)} type="email" />
          </div>
          <div className="marginconstant">
            <label>Patient 's Phone No:</label><span className="mandtory">*</span> <input onChange={(e)=> setPhone(e.target.value)} type="tel" />
          </div>
         
          <div className="marginconstant">
            <label>Patient 's Address1 :</label> <span className="mandtory">*</span><input onChange={(e)=> setPhone(e.target.value)} type="text" />
          </div>
          <div className="marginconstant"> 
            <label>Patient 's Address2 :</label> <input onChange={(e)=> setPhone(e.target.value)} type="text" />
          </div>
          <div className="marginconstant">
            <label>Country :</label> <input onChange={(e)=> setPhone(e.target.value)} type="text" />
            </div>
            <div className="marginconstant">
            <label>City :</label> <input onChange={(e)=> setPhone(e.target.value)} type="text" />
            </div>
            <div className="marginconstant">
            <label>PinCode :</label> <input onChange={(e)=> setPhone(e.target.value)} type="text" />
          </div>
          <div className="marginconstant">
            <label>Patient 's Date of Birth :</label><span className="mandtory">*</span> <input onChange={(e)=> setDob(e.target.value)}type="date" />
          </div>
          <div className="marginconstant">
            <label>Gender :</label>

            <input type="radio" name="male" value="Male" />
            <label>Male</label>
              <input type="radio" name="female" Female="Female" /> 
            
              <label>Female</label>

          </div>
          <div className="marginconstant">
            <label>Password:</label><span className="mandtory">*</span> <input onChange={(e)=> setPassword(e.target.value)}type="text" />
          </div>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
        </div>
      </>
    );
}

export default Registration;