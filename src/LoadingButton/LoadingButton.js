import React from "react";
import { Button, CircularProgress } from "@mui/material";

const LoadingButton = ({ onClick, buttonText, isLoading, loadingText }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      type="submit"
        disabled={isLoading}
    >
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CircularProgress
            size={20}
            color="secondary"
            style={{ marginRight: "10px" }}
          />
          Loading
        </div>
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default LoadingButton;
