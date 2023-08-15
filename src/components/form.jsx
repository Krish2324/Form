import React from "react";
import { useState } from "react";

const Form = () => {

  const [data,setData]=useState (0);
    const Clicked = () => {

      setData(data+1);
    }
    const Reset = () => {

      setData(0);
    }
  return (
    <>
      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>{data} times Button clicked </h1>
      <button onClick={Clicked}>click</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default Form;
