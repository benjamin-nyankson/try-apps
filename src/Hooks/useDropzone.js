import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";
import {
  baseStyle,
  // DropzonStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "../Styles/style";

function DropzoneComponent() {
  const [files, setFiles] = useState([]);
  const [imgLink, setImgLink] = useState();
  const [uploadSize, setUploadSize] = useState();
  const [compresSize, setCompresSize] = useState();
  const [sizeErr, setSizeErr] = useState();
  const [err, setErr] = useState();
  // const [orig, setOrig] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

    console.log(
      "Upload size:" + (acceptedFiles[0].size / 1024 / 1024).toFixed(2) + " MB"
    );
    // setOrig(acceptedFiles[0].preview);

    const fileSize = acceptedFiles[0].size / 1024 / 1024;
    if (fileSize >= 5) {
      console.log("Image size should not be more than 5mb");
      setCompresSize("");
      setImgLink(null);
      setUploadSize("");
      setSizeErr("Image size should not be more than 5mb");
    } else {
      const ImgFile = acceptedFiles[0];
      const options = {
        maxSize: 1,
        maxWidthOrHeight: 2000,
        useWebWorker: true,
        alwaysKeepResolution: true,
      };

      imageCompression(ImgFile, options)
        .then((output) => {
          const imageSize = (output.size / 1024 / 1024).toFixed(2);
          const compr = "compressed size:" + imageSize + " MB";
          setCompresSize(compr);

          const compressedLink = URL.createObjectURL(output);
          console.log(compressedLink);
          setImgLink(compressedLink);
          setUploadSize(
            "Upload size:" +
              (acceptedFiles[0].size / 1024 / 1024).toFixed(2) +
              " MB"
          );
          setSizeErr("Image size should is ok");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setErr(sizeErr);
    console.log(err);
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

  return [
    getRootProps,
    getInputProps,
    style,
    imgLink,
    files,
    uploadSize,
    compresSize,
    err,
    // orig,
  ];
}

export default DropzoneComponent;
