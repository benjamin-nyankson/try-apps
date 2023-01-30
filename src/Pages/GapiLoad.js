import React, { useState, useEffect } from "react";

function MyComponent() {
  const [fileBlob, setFileBlob] = useState(null);

  useEffect(() => {
    async function getFileBlob(fileId) {
      // Use the Google Drive API to get the file's content
      const response = await window.gapi.client.drive.files.get({
        fileId: fileId,
        alt: "media",
      });

      // Get the file's MIME type and base64-encoded content
      const contentType = response.headers.get("content-type");
      const base64Content = response.body;

      // Convert the base64-encoded content to a binary string
      const binaryContent = atob(base64Content);

      // Create a new Blob object with the binary string and MIME type
      const fileBlob = new Blob([binaryContent], { type: contentType });

      setFileBlob(fileBlob);
    }

    getFileBlob("fileId");
  }, []);

  return (
    <div>
      {fileBlob && <img src={URL.createObjectURL(fileBlob)} alt="My file" />}
    </div>
  );
}

export default MyComponent;
