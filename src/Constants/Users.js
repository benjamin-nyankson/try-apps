import React from "react";
import Ben from "../assets/Benji.jpeg";
import { Stack, Avatar, Grid, Paper, Container } from "@mui/material";
import { users } from "./UserList";


function Users() {
  return (
    <Container>
      <Grid container>
        {users.map((user) => (
          <Grid key={user.id} xs={12} sm={6} md={4} lg={3}>
            <Paper style={{ marginLeft: "10px", padding: "10px" }}>
              <Stack spacing={1}>
                <Avatar>{user.fname[0]}</Avatar>
                <h4>{user.fname}</h4>
                <h5>{user.lname}</h5>
                <img src={Ben} alt="" style={{ borderRadius: "2px" }} />
                {/* <p>{user.text}</p> */}
              </Stack>
            </Paper>
            <br />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Users;
