import React, { useState, useEffect } from "react";

function DropBox() {
  const [imgLink, setImgLink] = useState();
  const [imgError, setImgError] = useState();
  const [links, setLinks] = useState([{}]);

  const myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
  //dropkey
  const drop = {
    appKey: process.env.REACT_APP_APPKEY,
  };

  const handleSuccess = (files) => {
    const imageUrl = files[0].link;
    console.log(files);
    const link = imageUrl.slice(0, -5) + "?raw=1";
    // setImgLink(link);
    if (!link.match(myRegex)) {
      setImgError("Please select images only");
      setImgLink(null);
    } else {
      setImgLink(link);
      setImgError("");
      const blob = new Blob(link);
      console.log(blob);
    }
  };
  // console.log(links);
  return [imgLink, imgError, drop, handleSuccess, links];
}

export default DropBox;
