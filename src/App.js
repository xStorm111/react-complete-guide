import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (username, age) => {
    let newUser = {
      id: Math.random().toString(),
      username,
      age,
    };

    setUsers((prevState) => [...prevState, newUser]);
  };
  return (
    //<React.Fragment> === <>
    //Some projects doesn't support <>
    <>
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 && <UsersList users={users} />}
    </>
  );
}

export default App;
