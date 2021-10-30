import { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUserForm.module.css";

const AddUserForm = ({ onAddUser, onError }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const validateForm = (name, age) => {
    if (name.trim() === "" && age.trim() === "") {
      onError({ active: true, message: "Please enter a username and an age." });
      return false;
    }

    if (name.trim() === "" || age.trim() === "") {
      if (name.trim() === "") {
        onError({ active: true, message: "Please enter a username." });
        return false;
      }

      if (age.trim() === "") {
        onError({ active: true, message: "Please enter an age." });
        return false;
      }
    }

    if (Number(age) <= 0) {
      onError({ active: true, message: "Please enter an age higher than 0." });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const isValid = validateForm(enteredName, enteredAge);

    if (isValid) {
      onAddUser({
        name: enteredName,
        age: enteredAge
      });
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <Card elName="div">
      <form onSubmit={handleSubmit}>
        <div className={styles["form-input-wrapper"]}>
          <label className={styles["form-input-label"]} htmlFor="name">
            Username
          </label>
          <input
            className={styles["form-input"]}
            type="text"
            name="name"
            id="name"
            ref={nameInputRef}
          />
        </div>

        <div className={styles["form-input-wrapper"]}>
          <label className={styles["form-input-label"]} htmlFor="age">
            Age (Years)
          </label>
          <input
            className={styles["form-input"]}
            type="number"
            name="age"
            id="age"
            ref={ageInputRef}
          />
        </div>
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
