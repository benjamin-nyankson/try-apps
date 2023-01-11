import React, { useState } from "react";
import { isWebUri } from "valid-url";

export default function ImageLink3() {
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");

  const handleChange = (event) => {
    // const { value } = event.target;
    setUrl(event.target.value);
    if (!isWebUri(url)) {
      setUrlError("Please enter a valid URL");
    } else {
      setUrlError("");
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={handleChange} />
      {urlError && <p>{urlError}</p>}
    </div>
  );
}
