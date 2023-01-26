import React, { useState, useEffect } from "react";
import Compressor from "compressorjs";
export default function ImageCompress() {
  const [compress, setCompress] = useState(null);

  useEffect((e) => {
    console.log(e);
  });
  return (
    <div>
      <input type="file" accept="image/*, capture=camera" capture="camera" />
    </div>
  );
}
