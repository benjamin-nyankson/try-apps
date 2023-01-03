import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  // DropzonStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
  selectImageStyle,
  imageStyle,
} from "./style";

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);
  const [imgFile, setImgFile] = useState();
  const [imgLink, setImgLink] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    setImgFile(acceptedFiles);
    setImgLink(acceptedFiles[0].preview);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {"image/*":[]},
    multiple: false,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  // const thumbs = files.map((file) => (
  //   <div key={file.name}>
  //     <img src={file.preview} alt={file.name} width="500" height="500" />
  //   </div>
  // ));

  // clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleUpload = () => {
    if (imgFile === undefined) {
      alert("please select image");
    } else {
      setImgLink(imgFile[0].preview);
    }
  };
  return (
    <div style={selectImageStyle}>
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <div>Select Image or Drag and drop your image here.</div>
      <br />
      {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
      <p>{imgLink}</p>
    </div>
    {/* <aside> */}
        {" "}
        
      {/* </aside> */}
      <button onClick={handleUpload}>UPLOAD</button>
    </div>
  );
}

export default DropzoneComponent;
