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
      const [age,setAge] = useState('');
    const [ageErr,setAgeErr] = useState(false);
    
    
//Name Function Start//
    const NameHandle = (e) => {
        console.log(name)
        let nitem = e.target.value;
        
        if (nitem.length > 3 && nitem.length <= 8 || nitem.length==0) {
            setNameErr(false)
        }
        else{
            setNameErr(true)
        }
        setName(nitem)
    }
    
    const NameValuesHandle = (e) => {
        e.preventDefault();
      if (nameErr === true || name.length ==0) {
        alert('Your Name is Invalid');
        
      }
      if (surnameErr === true || surname.length ==0) {
        alert('Your Surname is Invalid');
        
      }if (mailErr === true || mail.length ==0) {
        alert('Your Email is Invalid');
        
      }if (phoneErr === true || phone.length ==0) {
        alert('Your Phone is Invalid');
        
      }if (ageErr === true || age.length ==0) {
        alert('Your Age is Invalid');
        
      }

    }

//SurName Function Start//
    const SurnameNameHandle = (e) => {
        console.log(surname)
        let Snitem = e.target.value;
        
        if (Snitem.length > 4 && Snitem.length <= 10 || Snitem.length==0) {
            setSurnameErr(false)
        }
        else{
            setSurnameErr(true)
        }
        setSurname(surname)
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

      if (Mailitem.length ==0) {
        setMailErr(false)
      }
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

        if (Phoneitem.length ==0) {
            setPhoneErr(false)
          }

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
      if (Ageitem >= 18 && Ageitem <= 70  || Ageitem==0) {
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

//   const SubmitForm = () => {
//     if (condition) {
        
//     } 
//     else {
        
//     }
//   }
      return (
    <>
    <div className="">
        <div className="mainForm">
            <h2 className="mainHeading">Regestration Form</h2>
        <form className="FormBox" onSubmit={NameValuesHandle}>
        
        <label className="mainLabel"> Name </label>
		<input className="mainInput" type="text" name=" Name" placeholder="Enter your Name" onChange={NameHandle}/>{nameErr?<span className="ErrorMessage">Invalid :- Must Have 4-8 letters</span>:""}<br />

        <label className="mainLabel"> Surname </label>
		<input className="mainInput" type="text" name="Surname" placeholder="Enter your Surname" onChange={SurnameNameHandle}/>{surnameErr?<span className="ErrorMessage">Invalid :- Must Have 5-10 letters</span>:""}<br />
		
        <label className="mainLabel"> Email </label>
		<input className="mainInput" type="email" name="email" placeholder="Enter your mail id" onChange={MailHandle}/>{mailErr?<span className="ErrorMessage">Invalid :- ID Must Contain @gmail.com</span>:""}<br />
		
        <label className="mainLabel"> Phone </label>
		<input className="mainInput" type="number" name="Phone" placeholder="Enter your Phone number" onChange={PhoneHandle}/>{phoneErr?<span className="ErrorMessage">Invalid :- Number Must start with 9,8,7,6</span>:""}<br />
        
        <label className="mainLabel"> Age </label>
		<input className="mainInput" type="age" name="Age" placeholder=" Enter your Age" onChange={AgeHandle}/>{ageErr?<span className="ErrorMessage">Invalid: Minimum age must be 18 and Maximum age can be 70</span>:""}<br />
		
            <button type="submit" className="mainBtn">Submit</button>
        
        </form>
      </div>
    </div>
      

    </>
  );
};

export default MainReg;
