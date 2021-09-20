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
    <div>
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
