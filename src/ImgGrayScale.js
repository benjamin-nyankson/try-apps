import React, { useRef, useEffect } from "react";
import me from "./assets/icon.png";
import Benji from "./assets/Benji.jpeg";
import { useState } from "react";
const GrayScaleImage = ({ src }) => {
  const canvasRef = useRef(null);
  const [img, setImg] = useState();
  useEffect(() => {
    var img = new Image();
    img.src = Benji;
    img.onload = function () {
        var canvas = document.createElement("canvas");
    //   const canvas = document.getElementById("canv");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imgData.data;
      for (var i = 0; i < data.length; i += 4) {
        var brightness =
          0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
      }
      ctx.putImageData(imgData, 0, 0);
      document.body.appendChild(canvas);
      setImg(canvas);
      console.log(canvas);
    };
  }, [src]);

  return (
    <div id="canv">
      <canvas ref={canvasRef} />
      {/* <img src={src} alt="" style={{ width: "200px" }} /> */}
      <img src={img} alt="" />

      {/* <p>nnvnn</p> */}
    </div>
  );
};

export default GrayScaleImage;
