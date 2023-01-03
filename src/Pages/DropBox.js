import { Button } from "@mui/material";
import React from "react";
import DropboxChooser from "react-dropbox-chooser";

// const APP_KEY = "awadfosd16y52au";
function DropBox() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Upload or choose from dropbox</h2>

      <div>
        <DropboxChooser appKey='awadfosd16y52au'>
          <Button> Click to upload</Button>
        </DropboxChooser>
      </div>
    </div>
  );
}

export default DropBox;
