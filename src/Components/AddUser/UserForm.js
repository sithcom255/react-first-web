import React, { useState } from "react";
import User from "../Users/User";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const initState = { name: "", age: "" };
  const [userInput, setUserInput] = useState(initState);
  console.log(userInput)

  const nameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      name: event.target.value,
    });
  };

  const ageChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      age: event.target.value,
    });
  };

  const validate = () => {
    if (userInput.name.trim().length === 0) {
      props.onValidationError("Please enter at least something... jesus");
      return false;
    }

    if (userInput.age > 120 || userInput.age <= 0 ) {
        const error = "is age really \" " + userInput.age +" \" ?"
        console.log(error)
      props.onValidationError(error);
      return false;
    }
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onValidationError("you managed to sucessfully touch my private button, please don\'t do it again");
    if (validate()) {
      props.onAddNewHuman(userInput);
      setUserInput(initState);
    }
  };

  return (
    <div className={`${styles["card"]}`}>
      <form onSubmit={submitHandler}>
        <div className={`${styles["user-form__controls"]}`}>
          <div className={`${styles["user-form__control"]}`}>
            <label>Name</label>
            <input
              type="text"
              value={userInput.name}
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div className={`${styles["user-form__control"]}`}>
            <label>Age</label>
            <input
              type="number"
              value={userInput.age}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <button type="submit">Add(Private)</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
