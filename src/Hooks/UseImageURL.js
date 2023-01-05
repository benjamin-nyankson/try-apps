import { useState } from "react";
function UseImageURL() {
  const [imgURL, setImgURl] = useState();
  const [link, setLink] = useState(null);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();
  const imgReg =
    /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  const handlechange = (event) => {
    setLink(event.target.value);
    setError("");
  };

  const handleClick = () => {
    if (link === null) {
      setOpen(true);
      setSeverity("error");
      setError("Please enter image url");
    } else if (!link.match(imgReg)) {
      setOpen(true);
      setSeverity("error");
      setError(`${link} is not a valid image url`);
      setOpen(true);
      setImgURl(null);
    } else if (link.match(imgReg)) {
      setImgURl(link);
    } else {
      setOpen(true);
      setSeverity("error");
      setError("No image found on the link you provided");
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
    handleClick,
    imgURL,
    error,
    open,
    handleClose,
    severity,
  ];
}

export default UseImageURL;
