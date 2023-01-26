import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDropzone from "../Hooks/useDropzone";

import {
  baseStyle,
  // DropzonStyle,
  selectImageStyle,
  imageStyle,
} from "../Styles/style";

function DropzoneComponent() {
  const [files, setFiles] = useState([]);
  const [
    getRootProps,
    getInputProps,
    style,
    imgLink,
    uploadSize,
    compresSize,
    err,
  ] = useDropzone();

  return (
    <div style={selectImageStyle}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <br />
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
        {/* <p>{imgLink}</p> */}
        {/* <p>{uploadSize}</p> */}
        <br />
        {/* <p>{compresSize}</p> */}
        <p>fjhfefh{err}</p>
      </div>

      {/* <button onClick={handleUpload}>UPLOAD</button> */}
      {/* <img src={orig} alt="" /> */}
      <p>fjhfefh{err}</p>
    </div>
  );
}

export default DropzoneComponent;
