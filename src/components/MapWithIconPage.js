import React, { useEffect } from "react";
import { pages } from "../Constants/Pages";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";

export default function MapWithIconPage() {
  const { page } = useParams();
  const pagez = pages.find((pages) => pages.page === page);

  useEffect(() => {
    console.log(pages);
  });
  return (
    <div>
      {pagez && (
        <div>
          <p>{pagez.page}</p>
          <IconButton onClick={() => console.log(pagez)}>
            {pagez.icon}
          </IconButton>
        </div>
      )}
    </div>
  );
}
