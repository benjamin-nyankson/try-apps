import React from "react";

const UserList = ({ users, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Hi{user.fname}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
