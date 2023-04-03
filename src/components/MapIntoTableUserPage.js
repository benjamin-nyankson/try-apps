import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { user } from "../Constants/User/User";
import { pages } from "../Constants/Pages";
export default function MapIntoTableUserPage() {
  const { id } = useParams();
  const users = pages.find((pages) => pages.id === Number(id));

  useEffect(() => {
    console.log(users);
  });
  return (
    <div>
      <Button onClick={() => console.log(users)}>dsdddad</Button>
    </div>
  );
}
