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
  const [imgFile, setImgFile] = useState();
  const [size, setSize] = useState();
  const [link, setLink] = useState();
  //   const [me, setMe] = useState({
  //     name: "Benjamin",
  //     id: 1,
  //   });
  const [error, setError] = useState();

  // const [orig, setOrig] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    // console.log("Hell", acceptedFiles);
    // try {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    setImgFile(acceptedFiles[0]);
    setSize(acceptedFiles[0].size);
    setLink(acceptedFiles[0].preview);
    //   console.log(
    //     "Upload size: " +
    //       (acceptedFiles[0].size / 1024 / 1024).toFixed(2) +
    //       " MB"
    //   );
    //   setFile(acceptedFiles[0].size / 1024 / 1024);
    // } catch (error) {
    //   console.log(error);
    // }
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

  useEffect(() => {
    const ImageFile = imgFile;
    const fileSize = (size / 1024 / 1024).toFixed(2);
    // console.log(fileSize);

    const options = {
      maxSize: 1,
      maxWidthOrHeight: 2100,
      useWebWorker: true,
      alwaysKeepResolution: true,
    };

    if (ImageFile) {
      if (fileSize >= 5) {
        //   console.log("Image size should not be more than 5mb");
        setError("Image size should not be more than 5mb");
        setImgLink("");
      } else if (fileSize <= 1) {
        //   console.log("Hurray! Image size is okay");
        setImgLink(link);
        setError("");
      } else {
        imageCompression(ImageFile, options).then((output) => {
          const imageSize = (output.size / 1024 / 1024).toFixed(2);
          const compr = "compressed size: " + imageSize + " MB";
          if (imageSize > 1) {
            imageCompression(output, options).then((res) => {
              setError("");
              setImgLink(URL.createObjectURL(res));
              // console.log(URL.createObjectURL(res));
              //   console.log((res.size / 1024 / 1024).toFixed(2) + " MB");
            });
          } else {
            //   console.log(compr);
            const compressedLink = URL.createObjectURL(output);
            setImgLink(compressedLink);
            setError("");
            //   console.log("Image compressed successfully");
          }
        });
      }
    }
  });

  return [getRootProps, getInputProps, style, imgLink, error];
}

export default DropzoneComponent;
