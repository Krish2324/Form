import React from "react";
import "./MainReg.css";

const MainReg = () => {
      return (
    <>
    <div className="mainContainer">
        <div className="mainForm">
            <h2 className="mainHeading">Regestration Form</h2>
        <form className="FormBox">
        <label className="mainLabel">
        
        Name
		<input  type="text" name=" Name"/><br />
		
        Email id
		<input type="email" name="email"/><br />
		
        Phone
		<input type="number" name="Contact"/><br />
 
        Post code
		<input type="text" name="Post code"/><br />
        
        Country
		<input type="text" name="Country"/><br />
		
        </label>
        <button>Submit</button>
      </form>
      </div>
    </div>
      

    </>
  );
};

export default MainReg;
