import React, { useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import imageCompression from "browser-image-compression";
function useDriveUpload() {
  const [openPicker] = useDrivePicker();
  const [image, setImage] = useState(null);
  const [imgFile, setImgFile] = useState();

  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.REACT_APP_CLIENT_ID,
      developerKey: process.env.REACT_APP_DEVELOP_KEY,
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        const file = data.docs;
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        } else {
          const my = file[0];
          const size = file[0].sizeBytes;
          console.log(size / 1024 / 1024);
          setImgFile(my);
          console.log(my);
          var imgId = my.id;
          const ImgUrl = process.env.REACT_APP_IMAGE_URL + imgId;
          console.log(ImgUrl);
          // console.log(data);
          // console.log(file);
          // console.log(ImgUrl);
          setImage(ImgUrl);
        }
        console.log(data);
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const file = e.target.files[0];

    // const formData = new FormData();
    // formData.append("image", file);
    console.log(image);
    alert(image);
  };

  const handleClear = () => {
    // console.log(image);
    // setImage(null);
    console.log(imgFile);
    const dat = URL.createObjectURL(imgFile);
    console.log(dat);
  };

  const handleCompress = () => {
    console.log(imgFile);
    console.log("mmmh");

    const options = {
      maxSize: 1,
      maxWidthOrHeight: 2100,
      useWebWorker: true,
      alwaysKeepResolution: true,
    };
    const me = image instanceof File;
    try {
      imageCompression(me, options).then((output) => {
        console.log(output);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return [handleOpenPicker, image, handleClear, handleSubmit, handleCompress];
}

export default useDriveUpload;
