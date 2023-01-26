import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDrop from "../Hooks/useDrop";

import {
  baseStyle,
  // DropzonStyle,
  selectImageStyle,
  imageStyle,
} from "../Styles/style";

function DropzoneComponent() {
  const [files, setFiles] = useState([]);
  const [getRootProps, getInputProps, style, imgLink, error] = useDrop();

  return (
    <div style={selectImageStyle}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <br />
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
      </div>

      <p>{error}</p>
    </div>
  );
}

export default DropzoneComponent;
