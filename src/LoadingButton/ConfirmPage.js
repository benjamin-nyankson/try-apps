import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Modal, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ConfirmPage({ open }) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (open === true) {
        navigate("/");
      }
    }, 2000);
  });
  return (
    <Modal open={open} sx={{ margin: "100px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px",
          maxWidth: "400px",
          height: "400px",
          margin: "0 auto",
          background: "white",
        }}
      >
        <div>Account Verification</div>
        <div
          style={{
            background: "#1F4EB4",
            borderRadius: "200px",
            margin: "20px",
          }}
        >
          <CheckIcon
            sx={{
              fontSize: "100px",
              color: "white",
              fontWeight: "bold",
            }}
            className="check"
          />
        </div>

        <p style={{ color: "#1F4EB4", fontSize: "20px" }}>
          Your account has been verified successfully!
        </p>
        <br />

        <CircularProgress />
        <p style={{ color: "#1F4EB4" }}>
          You are being redirected to the login page
        </p>
      </div>
    </Modal>
  );
}

export default ConfirmPage;
