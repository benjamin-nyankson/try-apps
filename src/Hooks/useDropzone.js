import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  // DropzonStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "../Pages/style";

function DropzoneComponent() {
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
    accept: { "image/*": [] },
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
  const myfile = useEffect(
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
  return [
    getRootProps,
    getInputProps,
    style,
    handleUpload,
    imgLink,
    files,
    myfile,
  ];
}

export default DropzoneComponent;
