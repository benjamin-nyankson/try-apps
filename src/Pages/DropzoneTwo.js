import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { useDropzone } from "react-dropzone";
import useDropzone from "../Hooks/useDropzone";
import {
  baseStyle,
  // DropzonStyle,
  selectImageStyle,
  imageStyle,
} from "./style";

function DropzoneComponent() {
  const [files, setFiles] = useState([]);
  const [getRootProps, getInputProps, style, handleUpload, imgLink] =
    useDropzone();

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  useEffect(() => () => {});
  return (
    <div style={selectImageStyle}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <br />
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
        <p>{imgLink}</p>
      </div>
      {/* <aside> */} {/* </aside> */}
      <button onClick={handleUpload}>UPLOAD</button>
    </div>
  );
}

export default DropzoneComponent;
