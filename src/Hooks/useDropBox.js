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
      const blob = new Blob(files);
      console.log(blob);
      // console.log(files);
      // console.log(files.id);
      // console.log(files.length);
      // console.log(link);
      // console.log(imageUrl);
      // //   setLinks(files.link);

      //loop
      const filesLenght = files.length;
      // if (filesLenght === 1) {
      //   console.log(`you selected ${filesLenght} file`);
      // } else {
      //   console.log(`you selected ${filesLenght} files`);
      // }

      // files.forEach((element) => {
      //   const imgURLS = [element.link.slice(0, -5) + "?raw=1"];
      //   const imgID = [element.id.slice(3)];
      //   console.log(imgID);
      //   // console.log([element.link.slice(0, -5) + "?raw=1"]);

      //   let id = 0;
      //   for (let i = 0; i <= filesLenght; i++) {
      //     id += i;
      //     setLinks([
      //       {
      //         url: imgURLS,
      //         id: imgID,
      //       },
      //     ]);
      //   }
      // });
    }
  };
  // console.log(links);
  return [imgLink, imgError, drop, handleSuccess, links];
}

export default DropBox;
