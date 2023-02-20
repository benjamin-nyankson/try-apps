import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Modal } from "@mui/material";
function ConfirmPage() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} sx={{ margin: "100px auto" }} onClose={handleClose}>
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
        <CheckIcon
          sx={{ fontSize: "200px", color: "#1F4EB4", fontWeight: "bold" }}
          className="check"
        />
        <p style={{ color: "#1F4EB4", fontSize: "20px" }}>
          Your account has been verified successfully!
        </p>
        <br />

        <p style={{ color: "#1F4EB4" }}>
          You are being redirected to the login page
        </p>
      </div>
    </Modal>
  );
}

export default ConfirmPage;
