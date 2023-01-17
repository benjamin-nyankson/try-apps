import React, { useEffect, useState } from "react";
import { users } from "../../Constants/UserList";
import UserList from "./UserList";
function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <UserList users={users} title="All users" />
    </div>
  );
}

export default Users;
