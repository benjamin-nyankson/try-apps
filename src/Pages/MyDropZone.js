import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDrop from "../Hooks/useDrop";
import Benji from "../assets/Benji.jpeg";
import imageCompression from "browser-image-compression";
import {
  baseStyle,
  // DropzonStyle,
  selectImageStyle,
  imageStyle,
} from "../Styles/style";

function DropzoneComponent() {
  const [grayFile, setGrayFiles] = useState([]);
  const [base, setBase] = useState();
  const [blb, setBlb] = useState();
  const [getRootProps, getInputProps, style, imgLink, error] = useDrop();
  useEffect(() => {
    var img = new Image();
    setGrayFiles(imgLink);
    img.src = grayFile;
    // img.src = Benji;
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
      // document.body.appendChild(canvas);
      // console.log(canvas.toDataURL());

      const base64 = canvas.toDataURL();
      canvas.toBlob((blob) => {
        console.log(blob);
        console.log("blob size", blob.size / 1024 / 1024);
        console.log(URL.createObjectURL(blob));
      }, "image/jpeg");
      console.log("base64", base64);
      const baseSize = (canvas.toDataURL().length / 1024 / 1024).toFixed(2);
      console.log("Base Size", baseSize, "MB");

      const options = {
        maxSize: 1,
        maxWidthOrHeight: 2100,
        useWebWorker: true,
        alwaysKeepResolution: true,
      };

      if (baseSize > 1) {
        console.log("Compress the base64");
      } else {
        console.log("Im okay");
      }

      setBase(canvas.toDataURL());
    };
  });
  return (
    <div style={selectImageStyle}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <br />
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
        {base && <img src={base} alt="" style={imageStyle} />}
      </div>

      <p>{error}</p>
    </div>
  );
}

export default DropzoneComponent;
