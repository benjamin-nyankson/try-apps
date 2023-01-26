import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import useDrivePicker from "react-google-drive-picker";
import GoogleDriveIcon from "../assets/GoogleDriveIcon.png";

import Button from "@mui/material/Button";
import {
  DropzonStyle,
  selectImageStyle,
  Buttons,
  cancelButton,
  confirmButton,
  DriveButton,
} from "../Styles/style";

export default function LabTabs() {
  const [files, setFiles] = useState([]);
  const [openPicker] = useDrivePicker();
  const [image, setImage] = useState(null);

  // Google Drive
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "942413833375-dh5ltfobbgcp22g23g4rljc6m0b1gmoc.apps.googleusercontent.com",
      developerKey: "AIzaSyCACXhR69AH1uVvrUROhG027e4quMSnVpo",
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        const file = data.docs;
        const imgId = file[0].id;
        const ImgUrl = "https://drive.google.com/uc?export=view&id=" + imgId;
        // console.log(ImgUrl)
        // console.log(data);
        // console.log(file);
        // console.log(ImgUrl);
        setImage(ImgUrl);
      },
    });
  };

  // Dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((myFile) => (
    <div key={myFile.name}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={myFile.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  const clickMe = () => {
    console.log(images);
  };
  return (
    <div style={DropzonStyle}>
      <div>
        <div style={selectImageStyle}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              <span style={{ color: "#004EEB", fontSize: "14px" }}>
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p>SVG, PNG, JPG or GIF(max. 800x400px)</p>

            <div>
              {images}
              <img src={image} alt="" />
            </div>
          </div>
        </div>

        <div style={selectImageStyle}>
          Select from
          <Button
            variant="contained"
            onClick={() => handleOpenPicker()}
            // startIcon={<AddToDriveIcon />}
            sx={DriveButton}
          >
            <img
              src={GoogleDriveIcon}
              alt=""
              style={{
                width: "20px",
                height: "20px",
                paddingRight: "5px",
              }}
            />
            Google Drive
          </Button>
          <br />
          {/* {image && <img src={image} alt="preview" />} */}
        </div>
        <div style={Buttons}>
          <Button sx={cancelButton}>Cancel</Button>
          <Button variant="contained" sx={confirmButton}>
            Confirm
          </Button>

          <Button onClick={() => clickMe()}>CLICK ME</Button>
        </div>

        <div>{/* <div>{images}</div> */}</div>
      </div>
    </div>
  );
}
