import React from "react";
import { useState } from "react";
// import { ReactCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ImageTest1 from './ImageTest1'


function ImageTest() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState()
  return (
    <div>
    <hi>{count}</hi>
    <button onClick={() => setCount(count+1)}>Increase</button><br /><br />


    <button onClick={() => setImage('https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ')}>send image</button>
    <ImageTest1 count = {count}/>
    <ImageTest1 image = {image}/>
    </div>
  );
}

export default ImageTest;
