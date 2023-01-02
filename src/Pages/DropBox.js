import React from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "bdbid41wswnl25r";
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
        <DropboxChooser appKey={APP_KEY}></DropboxChooser>
      </div>
    </div>
  );
}

export default DropBox;
