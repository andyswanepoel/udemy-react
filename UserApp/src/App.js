import React, { useState } from "react";

import AddUserForm from "./Components/UserForm/AddUserForm";
import UserList from "./Components/User/UserList";
import ErrorModal from "./Components/ErrorModal/ErrorModal";

import "normalize.css";
import "./index.css";

import { testUsers } from "./data/testUsers";

function App() {
  const [users, setUsers] = useState([]);
  const [errorModal, setErrorModal] = useState({
    active: false,
    message: ""
  });

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  const handleOnError = (newErrorModal) => {
    setErrorModal(newErrorModal);
  };

  const handleCloseModal = () => {
    setErrorModal({ active: false, message: "" });
  };

  return (
    <div>
      {errorModal.active && (
        <ErrorModal
          errorMessage={errorModal.message}
          onCloseModal={handleCloseModal}
        />
      )}
      <AddUserForm onAddUser={handleAddUser} onError={handleOnError} />
      <UserList users={users} />
    </div>
  );
}

export default App;
