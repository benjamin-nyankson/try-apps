import React, { useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
export default function MovieList({ data }) {
  // useEffect(() => {
  //   console.log(data);
  // });

  const sorted = data.sort(
    (a, b) => new Date(b.date) - new Date(a.date_scraped)
  );

  // console.log("SORTED", sorted);
  return (
    <Container>
      {sorted.map((movies) => (
        <Grid key={movies.id} container>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "80%",
              borderRadius: "5px",
              border: "1px solid red",
              margin: "5px auto",
              padding: "10px",
            }}
          >
            <p style={{ textAlign: "left" }}>Date: {movies.date_scraped}</p>
            <p>Title: {movies.file_name}</p>
            <img src={movies.image_link} alt="" />
          </div> */}

          <Grid lg={4} item>
            <Paper
              sx={{
                marginTop: "10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={movies.image_link} alt="" width="200px" />
              {/* <br /> */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: "auto",
                  textAlign: "left",
                }}
              >
                <h3>Title</h3>
                {movies.file_name}
              </div>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
