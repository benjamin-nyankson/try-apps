import { Button } from "@mui/material";
import React, { useState } from "react";

function ImageCompressor() {
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [imageCompress, setImageCompress] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const imageFile = e.target.files[0]
    setImage(imageFile);
    
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="left" style={{ border: "1px solid blue", width: "40%" }}>
        <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />
      </div>
      <div className="middle">
        <Button>Compress</Button>
        <Button>Donwnload</Button>
      </div>
      <div
        className="right"
        style={{ border: "1px solid blue", width: "40%" }}
      ></div>
    </div>
  );
}

export default ImageCompressor;
