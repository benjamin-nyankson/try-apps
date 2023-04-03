import React from "react";
import { useParams } from "react-router-dom";
import useFetchUsers from "./useFetchUsers";
export default function UserPage({ match }) {
  const { id } = useParams();
  const [data] = useFetchUsers();
  const user = data?.find((p) => p.id === parseInt(id));
  return <div>{user.fname}</div>;
}
