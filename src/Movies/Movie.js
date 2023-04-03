import React from "react";
import { Paper, Button } from "@mui/material";
function Movie({ items }) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={items.image_link} alt="" style={{ width: "300px" }} />
      <p>{items.file_name}</p>
    </Paper>
  );
}

export default Movie;
