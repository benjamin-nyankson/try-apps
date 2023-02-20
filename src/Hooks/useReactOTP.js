import React, { useState, useRef } from "react";

function useReactOTP() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setOtpVal(otp);
    const data = { otp: otp, email: "nyankson" };
    console.log(data);
    console.log(isNaN(otp));
  };
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
  ];
}

export default useReactOTP;
