import React from "react";
import { useEffect } from "react";
import useFetchUsers from "./useFetchUsers";
import { Link } from "react-router-dom";
export default function UserList() {
  const [data] = useFetchUsers();

  useEffect(() => {
    console.log(data?.data);
  });
  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          <Link to={`/userPage/${user.fname}`}>{user.fname}</Link>
        </div>
      ))}
    </div>
  );
}
