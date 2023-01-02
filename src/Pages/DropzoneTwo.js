import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  DropzonStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
  selectImageStyle,
} from "./style";

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);
  const [imgFile, setImgFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    setImgFile(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const style = useMemo(
    () => ({
      ...selectImageStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} width="500" height="500" />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleUpload = () => {
    console.log(imgFile);
  };
  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <aside>{thumbs}</aside>
      </div>

      <button onClick={handleUpload}>UPLOAD</button>
    </section>
  );
}

export default DropzoneComponent;
