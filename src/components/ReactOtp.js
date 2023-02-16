import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "@mui/material";
import useReactOTP from "../Hooks/useReactOTP";
function ReactOtp() {
  const [
    handleOTPChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    otpVal,
    disable,
    otp,
    otpInputRef,
    placeholders,
  ] = useReactOTP();

  //   const placeholders = ["0", "0", "0", "0"];
  return (
    <>
      <form
        className="otpForm"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <br />
        <br />
        {otpVal}
        <br />
        <br />
        <OTPInput
          ref={otpInputRef}
          value={otp}
          onChange={handleOTPChange}
          numInputs={4}
          isInputNum
          isInputRequired
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          separator={<span>-</span>}
          placeholder={["1", "2", "4", "5"]}
          containerStyle={{ display: "flex", justifyContent: "center" }}
          inputStyle={{
            width: "50px",
            border: "2px solid #ccc",
            height: "50px",
            borderRadius: "8px",
            margin: "0 10px",
            textAlign: "center",
            fontSize: "20px",
          }}
          focusStyle={{ border: "2px solid #007bff", outline: "none" }}
        />

        <Button
          type="submit"
          disabled={disable}
          style={{
            marginTop: "10px",
            width: "300px",
            height: "40px",
            fontSize: "20px",
          }}
          variant="contained"
          disableElevation
        >
          Confirm Email
        </Button>
      </form>
    </>
  );
}

export default ReactOtp;
