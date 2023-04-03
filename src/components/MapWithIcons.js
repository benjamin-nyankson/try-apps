import React from "react";
import { pages } from "../Constants/Pages";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MapWithIcons() {
  const navigate = useNavigate();
  console.log(pages);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pages.map((page1, index) => (
        <Button
          key={index}
          sx={{ textAlign: "left" }}
          startIcon={page1.icon}
          onClick={() => navigate(`/MapWithIconPage/${page1.page}`)}
        >
          {page1.page}
        </Button>
      ))}
    </div>
  );
}
