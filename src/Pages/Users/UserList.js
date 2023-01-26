import React from "react";
import { UserStyleContainer, UserStyle } from "../../Styles/style";
import UserNavbar from "../../Navbar/UserNavbar";
import { Grid, Container } from "@mui/material";
import UserCard from "./UserCard";
const UserList = ({ users, title, handleDelete }) => {
  return (
    <div>
      <UserNavbar />
      <Container style={UserStyleContainer}>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item key={user.id} xs={12} md={6} lg={4}>
              <UserCard user={user} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default UserList;
