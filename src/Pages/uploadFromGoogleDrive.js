import { useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import { selectImageStyle, DriveButton } from "./style";
import { Button } from "@mui/material";
// import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import GoogleDriveIcon from "../assets/GoogleDriveIcon.png";
import "react-image-crop/dist/ReactCrop.css";

function App() {
  const [openPicker] = useDrivePicker();
  const [image, setImage] = useState(null);

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

  return (
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
          style={{ width: "20px", height: "20px", paddingRight: "5px" }}
        />
        Google Drive
      </Button>
      <br />
      {image && <img src={image} alt="preview" />}
    </div>
  );
}

export default App;
