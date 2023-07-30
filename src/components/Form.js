import React, { useState } from "react";

//When we have a controlled form, the statee does not need to be stored in the same component

function Form(props) {
  //const [firstName, setFirstName] = useState("John"); //Sets a default value for the firstName var
  //const [lastName, setLastName] = useState("Henry");  //Sets a default value for the lastName var
  const [newsletter, setNewsletter] = useState(false)

/*   function handleFirstNameChange(event){  //Runs whenever the input field changes
    setFirstName(event.target.value)      //Sets the firstName variable to match what is typed in the input field
  }

  function handleLastNameChange(event){
    setLastName(event.target.value)       //The input target has a value attribute tied to whatever is inside the input field
  }
 */
  function handleNewsletterChange(event){
    setNewsletter(event.target.checked)
  }

  return (
    <form>
      <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
      <button type="submit">Submit</button>
      <input
        type ="checkbox"
        id = "newsletter"
        onChange={handleNewsletterChange}
        /* { checked instead of value }*/
        checked = {newsletter}
        />
    </form>
  );
}

export default Form;
