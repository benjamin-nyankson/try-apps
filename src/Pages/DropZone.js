import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { DropzonStyle } from "./style";
// import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function Dropzone() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const clickMe = (e) => {
    // const url = images[0].key;
    // console.log(url);
    // setImage(url);
    // console.log({ images });
    console.log(getRootProps);
    const url = file.preview;
    setImage(url);
    // setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(file);
  };

  return (
    <div style={DropzonStyle}>
      <div {...getRootProps()} onChange={handleChange}>
        <input {...getInputProps()} onChange={handleChange} type={file} />
        {/* <input onChange={handleChange} /> */}
        <p>
          <span style={{ color: "#004EEB", fontSize: "14px" }}>
            Click to upload
          </span>{" "}
          or drag and drop
        </p>
        <div>{images}</div>
      </div>

      {/* <img src={image} alt="preview" /> */}
      <button onClick={clickMe}>click</button>
    </div>
  );
}

export default Dropzone;
