import { Box, Typography, Snackbar, Alert, Stack } from "@mui/material";
import VerifyButton from "./buttons/VerifyButton";
import { verifyText, Container } from "../styles/forgotPasswordStyles";
import BackButton from "./buttons/BackButton";
import useVerifyOtp from "hooks/useVerifyOtp";
import { useState } from "react";
import OtpInput from "react-otp-input";
// filed content, valid email, valid pass, display error

const Otp = () => {
  const [
    // message,
    // otp1,
    // open,
    // severity,
    // handleChange,
    // handleSubmit,
    // handleClose,

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
    open,
    handleClose,
    severity,
    message,
  ] = useVerifyOtp();

  return (
    <Box sx={Container}>
      {/* {error} */}
      {message && (
        <Stack>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              variant="filled"
              onClose={handleClose}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
        </Stack>
      )}
      {/* <p style={{color:'red', fontWeight:'bold'}}></p> */}
      <br />
      <Typography variant="h3" sx={verifyText}>
        Verify Email
      </Typography>
      <br />
      <form action="" onSubmit={handleSubmit} className="otpForm">
        <div className="form">
          {/* {otp1.map((data, index) => {
            return (
              <input
                type="text"
                required
                name="otp1"
                placeholder="0"
                key={index}
                value={data}
                maxLength="1"
                onChange={(event) => handleChange(event.target, index)}
                onFocus={(event) => event.target.select()}
              />
            );
          })} */}

          <OtpInput
            ref={otpInputRef}
            value={otp}
            onChange={handleOTPChange}
            numInputs={4}
            isInputNum
            isInputRequired
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            separator={
              <span style={{ fontWeight: "bolder", fontSize: "20px" }}>-</span>
            }
            placeholder={4}
            hasErrored={hasErrored}
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
            errorStyle={{ border: "2px solid red" }}
            focusStyle={{ border: "2px solid #007bff", outline: "none" }}
          />
        </div>
        <VerifyButton disable={disable} />
      </form>
      <BackButton />
    </Box>
  );
};

export default Otp;
