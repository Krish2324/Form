import React from "react";
import { useState } from "react";

const Forget = () => {
let abc = "krish" /*optional*/
  const [data,setData]=useState ();
    const Clicked = () => {

      setData("krish");
    }
    const Refresh = () => {

      setData("Panchal");
    }
  return (
    <>
      <form>
        <label>
          Email
          <input type="email" name="email" id="mail" placeholder="Enter your email" />
          <br/>
          Password
          <input type="password" name="Password" id="pass" placeholder="Enter your password" />
          <br/>
          Conform_Password
          <input type="password" name="Conform_Password" placeholder="Conform your password" />
          <br/>
        </label>

      </form>
      <h2>Forget {data} Sucessfully</h2>
      <button onClick={Clicked}>Forget</button>
      <button onClick={Refresh}>Refresh</button>
      <button onClick={Forgetbtn}>Submit</button>


      <h4 id="A1"></h4>
      <h4 id="A2"></h4>
    </>
  );
};

    function Forgetbtn() {
        let Email = document.getElementById("mail").value;
        let Password = document.getElementById("pass").value;

        document.getElementById("A1").innerHTML = "Email =" + Email;
        document.getElementById("A2").innerHTML = "Password =" + Password;
    }


export default Forget;
