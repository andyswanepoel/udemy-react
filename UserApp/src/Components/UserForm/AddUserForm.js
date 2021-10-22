import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUserForm.module.css";

const AddUserForm = ({ onAddUser, onError }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  const validateForm = (formData) => {
    if (formData.name.trim() === "" && formData.age.trim() === "") {
      onError({ active: true, message: "Please enter a username and an age." });
      return false;
    }

    if (formData.name.trim() === "" || formData.age.trim() === "") {
      if (formData.name.trim() === "") {
        onError({ active: true, message: "Please enter a username." });
        return false;
      }

      if (formData.age.trim() === "") {
        onError({ active: true, message: "Please enter an age." });
        return false;
      }
    }

    if (Number(formData.age) <= 0) {
      onError({ active: true, message: "Please enter an age higher than 0." });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm(formData);

    if (isValid) {
      onAddUser(formData);
      setFormData({
        name: "",
        age: ""
      });
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
            value={formData.name}
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-input-wrapper"]}>
          <label className={styles["form-input-label"]} htmlFor="age">
            Age (Years)
          </label>
          <input
            className={styles["form-input"]}
            value={formData.age}
            type="number"
            name="age"
            id="age"
            onChange={handleChange}
          />
        </div>
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
