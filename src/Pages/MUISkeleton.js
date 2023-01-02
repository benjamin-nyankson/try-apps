import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import UISkeleton from "../Constants/Skeleton";
import { Skeleton, Snackbar } from "@mui/material";
import Users from "../Constants/Users";

function MuiSkeleton() {
  const [word, setWord] = useState("");
  const [loading, setLoadinng] = useState(false);
  const [val, setVal] = useState("show");

  //snackbar
  const [open, setOpen] = useState(false);
  const [severe, setSevere] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

  // const openSnack = () => {
  //   setOpen(true);
  // };

  const Load = () => {
    if (word === "") {
      setLoadinng(true);
      setVal("hide");
      setWord(
        "The LinearProgress uses a transition on the CSS transform property to provide a smooth update between different values. The default transition duration is 200ms. In the event a parent component updates the value prop too quickly, you will at least experience a 200ms delay between the re-render and the progress bar fully updated If you need to perform 30 re-renders per second or more, we recommend disabling the transition:"
      );
      setOpen(true);
      setSevere('success')
      setAlertMessage('This is a success message')
    } else {
      setLoadinng(false);
      setWord("");
      setVal("show");
      setOpen(true);
      setSevere('error')
      setAlertMessage('No information found')
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <br />
      <div>
        {/* <Button onclick></Button> */}
        <Button variant="contained" onClick={Load} fullWidth disableElevation>
          {val}
        </Button>
      </div>
      <br />
      {loading ? (
        <h3>{word}</h3>
      ) : (
        <Skeleton variant="rectangular" height={200} animation="wave" />
      )}

      <br />
      {loading ? (
        <div>
          <Users />
          <br />
        </div>
      ) : (
        <div>
          <UISkeleton />
        </div>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        // message="Open Success"
        onClose={handleClose}
        // action={action}
      >
        <Alert severity={severe}>{alertMessage}</Alert>
      </Snackbar>
    </div>
  );
}

export default MuiSkeleton;
