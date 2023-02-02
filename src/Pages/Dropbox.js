import { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";
import useDropBox from "../Hooks/useDropBox";

function DropBox() {
  const [imgLink, imgError, drop, handleSuccess] = useDropBox();

  return (
    <div>
      <DropboxChooser
        appKey={drop.appKey}
        multiselect={false}
        success={handleSuccess}
      >
        <button>Select File</button>
      </DropboxChooser>

      <br />
      <p style={{ color: "red" }}>{imgError}</p>
      {imgLink && (
        <img
          src={imgLink}
          alt="Preview"
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "",
          }}
        />
      )}
    </div>
  );
}

export default DropBox;
