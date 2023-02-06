import { useState } from "react";

function useImageURL({ setOpenModal }) {
  const [imgURL, setImgURl] = useState();
  const [link, setLink] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();
  const imgReg =
    /^https?:\/\/(.+\/)+.+(\.(png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  const handlechange = (event) => {
    setLink(event.target.value);
    setErrorMsg("");
  };

  const handleImageUrlSearch = () => {
    if (link === "") {
      setOpen(true);
      setSeverity("error");
      setErrorMsg("Please enter image link");
      alert("Please enter image link");
    } else if (!link.match(imgReg)) {
      setOpen(true);
      setSeverity("error");
      setErrorMsg(`The link you provided is not a valid image url`);
      alert(`The link you provided is not a valid image url`);
      setOpen(true);
      setImgURl(null);
    }
    //  else if (link.match(imgReg)) {
    //   // const blob = new Blob(link);
    //   // console.log(link.toDataURL());

    //   var request = new XMLHttpRequest();
    //   request.open("GET", link, true);
    //   request.responseType = "blob";
    //   request.onload = function () {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(request.response);
    //     reader.onload = function (e) {
    //       // console.log("DataURL:", e.target.result);
    //       const blob = e.target.result;
    //       setLink(blob);
    //       console.log("base64 img", blob);
    //     };
    //   };
    //   request.send();
    //   // console.log(blob);
    //   setImgURl(link);
    //   localStorage.setItem("originalImage", link);

    //   // setOpenModal((prevOpenModal) => !prevOpenModal);
    //   console.log(typeof setOpenModal);
    //   // alert("CHEERS!!! There is an image at the end of this url");
    //   setOpenModal(true);
    // }
    else {
      setOpen(true);
      setSeverity("error");
      setErrorMsg("No image found on the link you provided");
      setImgURl(null);
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
    handleImageUrlSearch,
    imgURL,
    errorMsg,
    open,
    handleClose,
    severity,
  ];
}

export default useImageURL;
