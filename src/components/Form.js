import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] =useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //frist name is required
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName, };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");   //Here we are resetting/clearing the state AFTER storing input as an Object  
      setLastName("");
      setErrors([]);
  } else {
    setErrors(["First name is required!"]);
  }
}

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {/* conditionally render errors messages */}
      {errors.length > 0 
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
      ))
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </form>
  );
}

export default Form;
