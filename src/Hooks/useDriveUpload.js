import React, { useState, useRef } from "react";
import useDrivePicker from "react-google-drive-picker";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { useEffect } from "react";

function useDriveUpload() {
  const [openPicker] = useDrivePicker();
  const [image, setImage] = useState(null);
  const [imgFile, setImgFile] = useState();
  const [id, setId] = useState();
  const [blobs, setBlob] = useState([]);
  const [links, setLinks] = useState();
  const [tokenClient, setTokenClient] = useState({});
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
          setId(imgId);
          const ImgUrl = process.env.REACT_APP_IMAGE_URL + imgId;
          console.log(ImgUrl);
          console.log(data);
          // console.log(file);
          // console.log(ImgUrl);
          setImage(ImgUrl);

          async function downloadAndCompressFile(imgId) {
            // Use the Google Drive API to download the file
            // const file = await downloadFile(imgId);

            const zip = new JSZip();
            zip.file(file.name, file);
            const content = await zip.generateAsync({ type: "blob" });

            const fileId = imgId; // The ID of the file to be downloaded and compressed
            const compressedFile = await downloadAndCompressFile(fileId);
            console.log(compressedFile);
          }
        }
        console.log(data);

        setTimeout(() => {
          tokenClient.requestAccessToken();
        }, 1000);
      },
    });
  };

  const googleRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      googleRef.current = window.google;
      const google = googleRef.current;
      console.log("google", google);
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_LOGIN_CLIENT_ID,
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outlines",
        size: "large",
      });

      setTokenClient(
        google.accounts.oauth2.initTokenClient({
          client_id: process.env.REACT_APP_LOGIN_CLIENT_ID,
          scope: "https://www.googleapis.com/auth/drive",
          callback: (tokenResponse) => {
            console.log(tokenResponse.access_token);
          },
        })
      );
    }, 1000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(image);
  };

  const handleClear = () => {
    console.log(imgFile);
    const dat = URL.createObjectURL(imgFile);
    console.log(dat);
  };

  const handleCompress = () => {
    console.log(imgFile);
    console.log("mmmh");
  };

  function handleCallbackResponse(response) {}

  const handleCompressFile = () => {};
  return [
    handleOpenPicker,
    image,
    handleClear,
    handleSubmit,
    handleCompress,
    handleCompressFile,
    links,
  ];
}

export default useDriveUpload;
