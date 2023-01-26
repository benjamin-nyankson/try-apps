import React, { useState } from "react";
import useDrivePicker from "react-google-drive-picker";

function useDriveUpload() {
  const [openPicker] = useDrivePicker();
  const [image, setImage] = useState(null);

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
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        } else {
          const file = data.docs;
          const my = file[0];
          var imgId = my.id;
          const ImgUrl = process.env.REACT_APP_IMAGE_URL + imgId;
          console.log(ImgUrl)
          // console.log(data);
          // console.log(file);
          // console.log(ImgUrl);
          setImage(ImgUrl);
        }
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
    console.log(image);
    setImage(null);
  };
  return [handleOpenPicker, image, handleClear, handleSubmit];
}

export default useDriveUpload;
