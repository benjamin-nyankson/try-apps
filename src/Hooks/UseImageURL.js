import { linkClasses } from "@mui/material";
import { useState } from "react";
function UseImageURL() {
  const [imgURL, setImgURl] = useState();
  const [link, setLink] = useState("");
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();
  const imgReg =
    /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  const reg = "image/png";
  const handlechange = (event) => {
    setLink(event.target.value);
    setError("");
  };

  const handleClick = async () => {
    if (link === "") {
      setOpen(true);
      setSeverity("error");
      setError("Please enter image url");
      setImgURl(null);
    }
    // else if (link.match(imgReg)) {
    //   console.log(link);
    //   setImgURl(link);
    // }
    // else {
    //   fetch(link)
    //     .then((response) => {
    //       console.log(response);
    //       if (!response.ok) {
    //         throw new Error("The link you provided does not contain an image1");
    //       } else {
    //         return response.blob();
    //       }
    //     })
    //     .then((blob) => {
    //       console.log(blob);
    //       const url = URL.createObjectURL(blob);
    //       // console.log(url);
    //       setImgURl(url);

    //       if (blob) {
    //         if (
    //           blob.type === "image/jpeg" ||
    //           blob.type === "image/png" ||
    //           blob.type === "image/jpg"
    //         ) {
    //           setImgURl(url);
    //           console.log("hurraay");
    //         } else {
    //           setImgURl("");
    //           console.log("The link you provided does not contain an image2");
    //         }
    //       } else {
    //         console.log("The link you provided does not contain an image3");
    //       }

    //       // const link = document.createElement("a");
    //       // link.href = url;
    //       // link.download = "image.jpg";
    //       // console.log("url", url);
    //       // link.click();
    //     })
    //     .catch((error) => {
    //       console.warn(
    //         "The link you provided does not contain an image4",
    //         error
    //       );
    //     });
    // }
    else {
      fetch(link, {
        method: "GET",
        headers: {},
      })
        .then((response) => {
          console.log(response);
          response.arrayBuffer().then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "image.png"); //or any other extension
            document.body.appendChild(link);
            setImgURl(link);
            link.click();
          });
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return [
    link,
    handlechange,
    handleClick,
    imgURL,
    error,
    open,
    handleClose,
    severity,
  ];
}

export default UseImageURL;
