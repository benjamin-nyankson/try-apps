import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import UseImageURL from "../Hooks/UseImageURL";
import { Stack, Alert, Snackbar } from "@mui/material";

function ImageLink() {
  const [
    link,
    handlechange,
    handleClick,
    imgURL,
    error,
    open,
    handleClose,
    severity,
  ] = UseImageURL();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <br />
      {imgURL && (
        <img src={imgURL} alt="" style={{ width: "300px", height: "400px" }} />
      )}
      <OutlinedInput
        type="text"
        value={link}
        onChange={handlechange}
        placeholder="Enter image url"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClick} edge="end">
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />

      {/* SnackBar here */}
      {error && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity={severity}
              sx={{ width: "100%" }}
              showProgress={true}
            >
              {error}
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </div>
  );
}

export default ImageLink;
