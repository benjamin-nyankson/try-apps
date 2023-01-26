import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
// import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { selectImageStyle } from "../../Styles/style";
import UploadSources from "./UploadSources";

function Dropzone() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
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
        {/* <p style={{textAlign:'center'}}>{file.name}</p> */}
      </div>
    </div>
  ));

  return (
    <div>
      <UploadSources />
      <div style={selectImageStyle}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            <span style={{ color: "#004EEB", fontSize: "14px" }}>
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
        </div>
        <div>{images}</div>
      </div>

      {/* <img src={images} alt="" /> */}
    </div>
  );
}

export default Dropzone;
