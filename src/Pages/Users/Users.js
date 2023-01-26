import React, { useEffect, useState } from "react";
import UserList from "./UserList";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/users/" + id, {
      method: "DELETE",
    });
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };
  return (
    <div>
      <UserList users={users} title="All users" handleDelete={handleDelete} />
    </div>
  );
}

export default Users;
