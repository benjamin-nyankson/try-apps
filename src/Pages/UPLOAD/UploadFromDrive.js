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
      <img
        src="https://doc-0o-1k-docs.googleusercontent.com/docs/securesc/0k3ibpecsgrhc5i5qapt71hfjip26ugh/f6cckh23uathrfrp1fhvregctphpdth1/1675085475000/03558954672005101922/03558954672005101922/1cJRkBgCajlfAGCszwmn0fOz7JHXZ8uWl?e=view&ax=AB85Z1B950bcrIAqNNWZ4myMvkH-BI0WqdRoq-xHmwFcU4VQpgdO03iHjY5wWMp4eQ_CLwL0n1dzc3U6-jLo-w8grJ_Xyj7JZCC3Ycy_JnVaK_5REJ1bxfL6g2IqovX_Im6b7rHVtcDM4O0Kv631Ru0lGjfYzIhxBZ57wS31KFYLGx6VzOi2R_yzguxC7vBPHbzvdbbCYFrmH3NYe17WHM_liUD6lYkhNXK3HvqxaHNI59seZai4rh5-Jv1yXBjIzlkiZ-hy8CjXLnTNVSq4I183un6HFAXTlkb7Ng1Yt_HtYer1jgds8ueUE0fwQMNsDZCSkf7RZ4VrytM3waNjAIEKMoVSnQ05d1RwH9WCgk5HT_IKZQV8Lxv8rxh8I8u0sBU7l2bmBc-NNUdOmsS4lox7Td7DtfXwJwiNK1f4_Q8Eql6AfBv9aJOu-pTLuCiqQhGq2iP5Ba1oChfFgFl-B03kQ4bA034Ib_sMoromSB05YYB-tCFdlKUVLMmJD9K6YHC27WLoLx6qBAdvH7RQY4q-RqKWfBul2U5ohXbc9UZtrtQ5DNnoLmRWdjApxJRchbDlgGenguLON3GmMJNUgfpoN1HWcOYZ2_CBKB8B8kv3XIJ4wd9hOkee0y_5qR3LXFrv4WRAzZnS6nm18NrP3Vx4ljfJVGVeN__0UhpNprr0ndJVNBPm3qOmAvGpTeDvVWRb_5vA935swyith5Mkh_hjkncTdpZM67EPJ2ni2XjXR_N_qk9TvMb15C7r4I4V3YYfmNDWEEChGbWorRilDn2dwPimIVHqM03jf7UbMzIxC7bAq9fLWmJfYkf-TGP6IGt620bNkr_jRGeDmBg_KTkKEzyelq7pA-jishICoWQjVfmwvtOvEslCW552snebznwcwNXw_W___rVespjDi1GY6gmY-QmpnaaPP0u04slLIyN3bdld3sBUBnk2H4iNnoxzE252LA&uuid=da3d184e-3d05-4d40-aac6-03969ec96ed1&authuser=1"
        alt="ghg"
      />
    </div>
  );
}

export default App;
