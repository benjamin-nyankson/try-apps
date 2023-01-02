import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Search";
function Crop() {
  const [imgURL, setImgURl] = useState();
  const [link, setLink] = useState();
  const [error, setError] = useState();
  const imgReg =
    /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  const handlechange = (event) => {
    setLink(event.target.value);
    setError("");
  };

  const handleClick = () => {
    // setImgURl(link);
    if (!link.match(imgReg)) {
      setError("Invalid image link");
      setImgURl(null);
    } else {
      setImgURl(link);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {imgURL && (
        <img src={imgURL} alt="" style={{ width: "300px", height: "400px" }} />
      )}
      <h3>{error}</h3>
      <br />
      <OutlinedInput
        type="text"
        value={link}
        onChange={handlechange}
        placeholder="Enter image url"
        // onBlur={handleClick}

        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              <Visibility />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}

export default Crop;
