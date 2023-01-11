import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
// import UseImageURL from "../Hooks/UseImageURL";
// import { Stack, Alert, Snackbar } from "@mui/material";
import { useState } from "react";

function ImageLink2() {
  const [imgURL, setImgURl] = useState();
  const [link, setLink] = useState("");
  const [error, setError] = useState();

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  function validateImage() {
    const url = "htt://www.example.om";

    if (isValidUrl(url)) {
      // The URL is valid
      alert("valid");
    } else {
      // The URL is invalid
      alert("invalid");
    }
  }

  const handlechange = (event) => {
    setLink(event.target.value);
    setError("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={imgURL} alt="" />
      <OutlinedInput
        type="text"
        value={link}
        onChange={handlechange}
        placeholder="Enter image url"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={validateImage}
              edge="end"
              style={{ color: "blue" }}
            >
              <ImageSearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}

export default ImageLink2;
