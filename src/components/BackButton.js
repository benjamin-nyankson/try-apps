import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  BackButtonStyle,
  BackArrowStyle,
  BackButtonTextStyle,
  BackButtonContainerStyle,
} from "../Pages/style";
function BackButton() {
  return (
    <div style={BackButtonContainerStyle}>
      <div>
        <Link to="/" style={BackButtonStyle}>
          <ArrowBackIcon sx={BackArrowStyle} />
          <Typography variant="p" sx={BackButtonTextStyle}>
            {" "}
            Back to login
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default BackButton;
