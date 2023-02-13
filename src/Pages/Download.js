import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { IconButton } from "@mui/material";
import { Save } from "@mui/icons-material";
export default function Download({ url, filename }) {
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [link, setLink] = useState();
  const download = (url, name) => {
    if (!url) {
      throw new Error("Resource URL not provided! You need to provide one");
    }
    setFetching(true);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        setFetching(false);
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobURL;
        a.style = "display: none";

        if (name && name.length) a.download = name;
        document.body.appendChild(a);
        a.click();
      })
      .catch(() => setError(true));
  };

  return (
    <LoadingButton
      disabled={fetching}
      loading={loading}
      // loadingIndicator="Loading…..."
      loadingPosition="start"
      variant="contained"
      startIcon={<IconButton />}
      onClick={() =>
        download(
          "https://cdn.ghanaweb.com/imagelib/pics/509/50985930.jpg",
          "Image"
        )
      }
      aria-label="download gif"
    >
      DOWNLOAD
    </LoadingButton>
  );
}
