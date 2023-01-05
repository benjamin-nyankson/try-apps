// import { useState } from "react";
// import useDrivePicker from "react-google-drive-picker";
import { selectImageStyle, DriveButton } from "../style";
import { Button } from "@mui/material";
import UploadSources from "./UploadSources";
// import AddToDriveIcon from "@mui/icons-material/AddToDrive";
// import GoogleDriveIcon from ".../assets/GoogleDriveIcon.png";
import "react-image-crop/dist/ReactCrop.css";
import useDriveUpload from "../../Hooks/useDriveUpload";
function App() {
  const [handleOpenPicker, image, handleClear, handleSubmit] = useDriveUpload();

  return (
    <div>
      <UploadSources />
      <div style={selectImageStyle}>
        <form onSubmit={handleSubmit}>
          <Button
            variant="contained"
            onClick={() => handleOpenPicker()}
            // startIcon={<AddToDriveIcon />}
            sx={DriveButton}
          >
            Upload
          </Button>

          <Button onClick={handleClear}>CLEAR</Button>
          <br />
          {image && <img src={image} alt="preview" />}

          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
