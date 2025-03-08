import React from "react";
import '../App.css'
import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router";
import instance from "../API/instance";
import { createUser } from "../API/userApi";

function Registration() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");
  const handleRadioChange = (
    value
  ) => {
    setGender(value);
  };
  const [firstname, setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [dob,setDob] = useState("");
  const [password,setPassword] = useState("");

  const mutation = useMutation({ mutationFn: () => createUser({ firstName: firstname, password, lastName: lastname }),
  onSuccess: (data) => {
    console.log(data);
    navigate("/dashboard")
  }, })

  
  const handleSubmitform = (e) => {
    e.preventDefault();
    mutation.mutate();
  }

  return (<>
  <div className="padingform">
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" onChange={(e)=> setFirstname(e.target.value)}id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label for="last_name"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" onChange={(e)=> setLastname(e.target.value)} id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label for="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
            <input type="text" onChange={(e)=> setAddress(e.target.value)} id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" onChange={(e)=> setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"   />
        </div>
        <div>
            <label for="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
            <input type="date" id="dob"  onChange={(e)=> setDob(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label for="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" onChange={(e)=> setPassword(e.target.value)}  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
    <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" onClick={handleSubmitform} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
  </>)} 
   /* return (
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
            <label>Password:</label><span className="mandtory">*</span> <input onChange={(e)=> setPassword(e.target.value)} type="text" />
          </div>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
        </div>
      </>
    );
}*/

export default Registration;