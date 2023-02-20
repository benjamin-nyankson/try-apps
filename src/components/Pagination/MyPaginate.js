import React from "react";

import {
  Grid,
  Paper,
  Container,
  CardHeader,
  Card,
  CardContent,
} from "@mui/material";
function MyPaginate({ pageData }) {
  return (
    <Container>
      <Grid container spacing={3} sx={{ margin: "auto" }}>
        {pageData.map((item) => (
          //   <p>{item.name}</p>
          <Grid item key={item.id} lg={2}>
            {/* <Paper>
              <p>Name: {item.name}</p>
              <p>Name: {item.email}</p>
            </Paper> */}
            <Card elevation={4}>
              <CardHeader title={item.name} subheader={item.emai} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyPaginate;
