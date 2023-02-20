import { useState, useRef } from "react";
import { API } from "services/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function useVerifyOtp() {
  const [message, setMessage] = useState();
  const [severity, setSevierity] = useState();
  const [open, setOpen] = useState(false);
  const [otp1, setOtp] = useState(new Array(4).fill(""));

  // <=============>

  const [otp, setOTP] = useState("");
  const otpInputRef = useRef();
  const [otpVal, setOtpVal] = useState("");
  const [disable, setDisable] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const placeholders = ["0", "0", "0", "0"];

  function handleOTPChange(value) {
    if (isNaN(value)) {
      setDisable(true);
      setHasErrored(true);
    } else if (value.length >= 4) {
      setDisable(false);
      setHasErrored(false);
    } else if (value.length === 0) {
      setHasErrored(false);
    } else {
      setDisable(true);
    }

    setOTP(value);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 8) {
      // Backspace key
      event.preventDefault();
      const otpInput = otpInputRef.current.getInputInstance();
      const inputValue = otpInput.value;
      const cursorPosition = otpInput.selectionStart;
      const newValue =
        inputValue.slice(0, cursorPosition - 1) +
        inputValue.slice(cursorPosition);
      //   setOTP(newValue);
      // console.log(newValue);
    }
  }

  function handlePaste(event) {
    event.preventDefault();
    const otpInput = otpInputRef.current.getInputInstance();
    const inputValue = otpInput.value;
    const cursorPosition = otpInput.selectionStart;
    const clipboardData = event.clipboardData.getData("Text");
    const newValue =
      inputValue.slice(0, cursorPosition) +
      clipboardData +
      inputValue.slice(cursorPosition);
    setOTP(newValue);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setOtpVal(otp);
  //   const data = { otp: otp, email: "nyankson" };
  //   console.log(data);
  //   console.log(isNaN(otp));
  // };

  // <===========>

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state
    ? location.state.email
    : location.search.split("=")[1];

  // const handleChange = (element, index) => {
  //   setMessage("");
  //   if (isNaN(element.value)) return false;

  //   setOtp([...otp1.map((d, idx) => (idx === index ? element.value : d))]);

  //   if (element.nextSibling) {
  //     element.nextSibling.focus();
  //   }
  // };

  // const otp = otp1.join("");
  const data = { otp, email };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      await API.post("user/confirm/", { ...data });
      setMessage("Account verified successfully. Redirecting to login page");
      setOpen(true);
      setSevierity("success");
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    } catch (err) {
      if (err.response.data.data) {
        setMessage(err.response.data.data);
        setOpen(true);
        setSevierity("error");
      } else if (err.response.data.error) {
        setMessage(err.response.data.error);
        setOpen(true);
        setSevierity("error");
      } else {
        setMessage("");
        setOpen(false);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  // return [message, otp1, open, severity, handleChange, handleSubmit, handleClose];
  return [
    handleOTPChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    otpVal,
    disable,
    otp,
    otpInputRef,
    placeholders,
    hasErrored,
    handleClose,
    open,
    severity,
    message,
  ];
}
