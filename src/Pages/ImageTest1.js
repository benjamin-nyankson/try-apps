import React from "react";
function ImageTest1(props) {
  return (
    <>
      <div>{props.count}</div>
      <div>
        <img src={props.image} alt="" />
      </div>
    </>
  );
}

export default ImageTest1;
