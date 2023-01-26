import React, { useState } from "react";

const OneDrivePicker = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePicker = (files) => {
    setSelectedFile(files[0]);
  };

  return (
    <div>
      <button
        onClick={() => {
          // OneDrive.open({
          //   clientId: "d70e2d72-748c-4562-8adb-f86d8990c2ab",
          //   action: "download",
          //   multiSelect: false,
          //   success: handlePicker,
          //   cancel: function () {
          //     console.log("Cancelled");
          //   },
          //   error: function (error) {
          //     console.log(error);
          //   },
          // });
        }}
      >
        Pick a file from OneDrive
      </button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default OneDrivePicker;
