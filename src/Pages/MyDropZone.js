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
  useEffect(() => {
    var img = new Image();
    setFiles(imgLink);
    img.src = files;
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
