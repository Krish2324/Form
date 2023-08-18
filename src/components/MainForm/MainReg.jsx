import React from "react";
import "./MainReg.css";
import { useState } from "react";


const MainReg = () => {
    const [name,setName] = useState('');
    const [nameErr,setNameErr] = useState(false);
      const [surname,setSurname] = useState('');
    const [surnameErr,setSurnameErr] = useState(false);
      const [mail,setMail] = useState('');
    const [mailErr,setMailErr] = useState(false);
      const [phone,setPhone] = useState('');
    const [phoneErr,setPhoneErr] = useState(false);
      const [age,setAge] = useState('18');
    const [ageErr,setAgeErr] = useState(false);
    
    
//Name Function Start//
    const NameHandle = (e) => {
        let nitem = e.target.value;
        
        if (nitem.length > 3 && name.length < 8) {
            setNameErr(false)
        }
        else{
            setNameErr(true)
        }
        setName(nitem)
    }
    
    const NameValuesHandle = () => {
      if (nameErr == true) {
        alert('Your Name is Invalid');
        
      }
    }

//SurName Function Start//
    const SurnameNameHandle = (e) => {
        let Snitem = e.target.value;
        setSurname(Snitem)
        if (Snitem.length > 4 && surname.length < 10) {
            setSurnameErr(false)
        }
        else{
            setSurnameErr(true)
        }
    }
    
    // const SnameValuesHandle = () => {
    //   if (surnameErr == true) {
    //     alert('Your Name is Invalid');
        
    //   }
    // }

//Email Function Start//
    const MailHandle = (e) => {
      let Mailitem = e.target.value;
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      setMailErr(!(regex.test(Mailitem)))
      setMail(mail)

    }

    // const MailValuesHandle = () => {
    // if (mailErr == true) {
    //   alert('Your Name is Invalid');
      
    // }
    // }

//Phone Function Start//
    const PhoneHandle = (e) => {
        let Phoneitem = e.target.value;
        let regex = /^[6-9]\d{9}$/g;
        setPhoneErr(!(regex.test(Phoneitem)))
        setPhone(phone)
    }
    
    // const PhoneValuesHandle = () => {
    //   if (phoneErr == true) {
    //     alert('Your Name is Invalid');
        
    //   }
    // }

 //Age Function Start//
    const AgeHandle = (e) => {
      let Ageitem = e.target.value;
      console.log('This is ',age);
      if (Ageitem >= 18 && Ageitem <= 70) {
          setAgeErr(false)
      }
      else{
          setAgeErr(true)
      }
      setAge(Ageitem)
  }
  
  // const AgeValuesHandle = () => {
  //   if (ageErr == true) {
  //     alert('Your Name is Invalid');
      
  //   }
  // }
      return (
    <>
    <div className="mainContainer">
        <div className="mainForm">
            <h2 className="mainHeading">Regestration Form</h2>
        <form className="FormBox" onSubmit={NameValuesHandle}>
        
        <label className="mainLabel"> Name </label>
		<input className="mainInput" type="text" name=" Name" onChange={NameHandle}/>{nameErr?<span className="ErrorMessage">Invalid Name</span>:""}<br />

        <label className="mainLabel"> Surname </label>
		<input className="mainInput" type="text" name="Surname" onChange={SurnameNameHandle}/>{surnameErr?<span className="ErrorMessage">Invalid Surname</span>:""}<br />
		
        <label className="mainLabel"> Email </label>
		<input className="mainInput" type="email" name="email" onChange={MailHandle}/>{mailErr?<span className="ErrorMessage">Mail Invalid</span>:""}<br />
		
        <label className="mainLabel"> Phone </label>
		<input className="mainInput" type="number" name="Phone" onChange={PhoneHandle}/>{phoneErr?<span className="ErrorMessage">Phone No Invalid</span>:""}<br />
        
        <label className="mainLabel"> Age </label>
		<input className="mainInput" type="number" name="Age" onChange={AgeHandle}/>{ageErr?<span className="ErrorMessage">Age Invalid: Minimum age must be 18 and Maximum age can be 70</span>:""}<br />
		
            <button type="button" className="mainBtn">Submit</button>
        
        </form>
      </div>
    </div>
      

    </>
  );
};

export default MainReg;
