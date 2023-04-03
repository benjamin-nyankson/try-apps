import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDrop from "../Hooks/useDrop";
import imageCompression from "browser-image-compression";
import {
  baseStyle,
  // DropzonStyle,
  selectImageStyle,
  imageStyle,
} from "../Styles/style";

function GrayScale() {
  const [files, setFiles] = useState([]);
  const [getRootProps, getInputProps, style, imgLink, error] = useDrop();

  //grayscale
  const [grayFile, setGrayFiles] = useState([]);
  const [base, setBase] = useState();
  const [imgBlob, setImgBlob] = useState();
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

      const base64 = canvas.toDataURL();
      canvas.toBlob((blob) => {
        // console.log(blob);
        // console.log("blob size", blob.size / 1024 / 1024);
        // console.log(URL.createObjectURL(blob));
        setImgBlob(URL.createObjectURL(blob));
      }, "image/jpeg");
      // console.log("base64", base64);
      const baseSize = (canvas.toDataURL().length / 1024 / 1024).toFixed(2);
      // console.log("Base Size", baseSize, "MB");

      const options = {
        maxSize: 1,
        maxWidthOrHeight: 2100,
        useWebWorker: true,
        alwaysKeepResolution: true,
      };

      if (baseSize > 1) {
        // console.log("Compress the base64");

        imageCompression();
      } else {
        // console.log("Im okay");
      }

      setBase(canvas.toDataURL());
    };

    console.log(base);
  });
  return (
    <div style={selectImageStyle}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
        {imgBlob && <img src={imgBlob} alt="" style={imageStyle} />}

        <img src={base} alt="" />
      </div>
      <p>{error}</p>
    </div>
  );
}

export default GrayScale;
