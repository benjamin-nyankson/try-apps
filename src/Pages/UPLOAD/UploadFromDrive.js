import { useEffect } from "react";
// import useDrivePicker from "react-google-drive-picker";
import { selectImageStyle, DriveButton } from "../../Styles/style";
import { Button } from "@mui/material";
import UploadSources from "./UploadSources";
// import AddToDriveIcon from "@mui/icons-material/AddToDrive";
// import GoogleDriveIcon from ".../assets/GoogleDriveIcon.png";
import "react-image-crop/dist/ReactCrop.css";
import useDriveUpload from "../../Hooks/useDriveUpload";
function App() {
  const [
    handleOpenPicker,
    image,
    handleClear,
    handleSubmit,
    handleCompress,
    handleCompressFile,
    links,
  ] = useDriveUpload();

  useEffect(() => {
    var img = new Image();
    img.src = image;
    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imgData.data;
      for (var i = 0; i < data.length; i += 4) {
        var brightness =
          0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
      }
      ctx.putImageData(imgData, 0, 0);
      document.body.appendChild(canvas);
    };
  });

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
          {links && <img src={links} alt="preview" />}
          {/* <img src={src} alt="preview" /> */}
          <Button onClick={handleCompress}>Compress</Button>{" "}
          <Button onClick={handleCompressFile}>Compress fil</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
