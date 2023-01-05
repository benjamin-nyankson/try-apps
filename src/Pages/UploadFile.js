import { Button } from "@mui/material";
import React, { useEffect } from "react";
import useDropzone from "../Hooks/useDropzone";
import UploadImagePage from "./UploadImagePage";
import { useNavigate } from "react-router-dom";

import BackButton from "../components/BackButton";

function DropzoneComponent() {
  const [getRootProps, getInputProps, style, handleUpload, imgLink, files] =
    useDropzone();
  const navigate = useNavigate();

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  useEffect(() => {
    if (imgLink) {
      navigate("/uploadImgFile");
    }
    // else {
    //     alert('why')
    // }
  });

  return (
    <div>
      <br />
      <Button {...getRootProps({ style })} variant="contained">
        <input {...getInputProps()} />
        {/* <Button variant="contained">click to select image</Button> */}
        selec
      </Button>
      {/* {imgLink && <img src={imgLink} alt="" style={imageStyle} image = {image}/>} */}
      <UploadImagePage image={imgLink} />
      <p>{imgLink}</p>
      {/* <aside> */} {/* </aside> */}
      <button onClick={handleUpload}>UPLOAD</button>
      <a href="/uploadImgFile">Send</a>
      
      <BackButton />
    </div>
  );
}

export default DropzoneComponent;
