import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import Benji from "./assets/Benji.jpeg";
import jwtDecode from "jwt-decode";
const GrayScaleImage = () => {
  const [grayScale, setGrayScale] = useState(false);
  const imageRef = useRef(null);
  const [base, setBase] = useState();
  const handleClick = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = imageRef.current.width;
    canvas.height = imageRef.current.height;

    ctx.drawImage(imageRef.current, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;
      data[i + 1] = avg;
      data[i + 2] = avg;
    }

    ctx.putImageData(imageData, 0, 0);

    imageRef.current.src = canvas.toDataURL();
    // console.log(canvas.toDataURL());
    const obj = canvas.toDataURL();
    setBase(canvas.toDataURL());
    console.log(obj);
    setGrayScale(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={Benji}
          alt=""
          style={{ width: "200px", marginRight: "10px" }}
        />
        <br />
        {!base ? (
          <img
            ref={imageRef}
            src={Benji}
            alt="Original Image"
            style={{ display: "none" }}
          />
        ) : (
          <img src={base} alt="" style={{ width: "200px" }} />
        )}
      </div>

      <br />
      <br />
      <Button variant="contained" onClick={handleClick}>
        Convert to Grayscale
      </Button>
      {grayScale && <p>Image is now in grayscale.</p>}
      <div>{/* <img src={base} alt="" style={{ width: "200px" }} /> */}</div>
    </div>
  );
};

export default GrayScaleImage;
