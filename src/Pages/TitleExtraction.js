import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
function TitleExtraction() {
  const [postTitle, setPostTitle] = useState("");
  const [url, setUrl] = useState("");
  //   useEffect(() => {
  //     // extract the post title from the URL using regular expressions
  //     const matches = url.match(/\/([^\/]+)\/?$/);
  //     if (matches) {
  //       const slug = matches[1];
  //       const title = slug.replace(/-/g, " "); // replace hyphens with spaces
  //       setPostTitle(title);
  //     }
  //   }, [url]);
  const extract = () => {
    const matches = url.match(/\/([^\/]+)\/?$/);
    if (matches) {
      const slug = matches[1];
      const title = slug.replace(/-/g, " "); // replace hyphens with spaces
      setPostTitle(title);
    }

  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "200px",
        margin: "auto",
      }}
    >
      <p>dwdnn</p>

      <input
        type="text"
        style={{ width: "300px", height: "50px" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <button onClick={extract}>Extract</button>
      <br />
      <p>Title: {postTitle}</p>
      <Typography noWrap>{postTitle}</Typography>
      <Link
        href={postTitle}
        underline="none"
        target="_blank"
        rel="noopener"
        sx={{
          color: "#344054",
          fontWeight: "bold",
          py: 1,
          ":hover": {
            color: "#313131",
          },
        }}
      >
        <Typography noWrap>{postTitle}</Typography>
      </Link>
    </Box>
  );
}

export default TitleExtraction;
