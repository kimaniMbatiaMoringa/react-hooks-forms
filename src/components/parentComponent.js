import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";
import { useState } from "react";

/* 
    Seperating a state object from the component that modifies it
    Allows us to use its data in other components. We can capture
    User input and utilize it throughout our application

*/

function ParentComponent(){
    const [firstName, setFirstName] = useState("John"); //Sets a default value for the firstName var
    const [lastName, setLastName] = useState("Henry");  //Sets a default value for the lastName var

    function handleFirstNameChange(event){  //Runs whenever the input field changes
        setFirstName(event.target.value)      //Sets the firstName variable to match what is typed in the input field
      }
    
      function handleLastNameChange(event){
        setLastName(event.target.value)       //The input target has a value attribute tied to whatever is inside the input field
      }

      return(
        <>
        <Form 
            firstName = {firstName}
            lastName = {lastName}
            handleFirstNameChange = {handleFirstNameChange}
            handleLastNameChange = {handleLastNameChange}
        />
        <DisplayData firstName= {firstName} lastName={lastName} />    
        </>
      )




}

export default ParentComponent