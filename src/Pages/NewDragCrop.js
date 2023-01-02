// import React, { useRef, useState } from "react";
// import { DropzonStyle } from "./style";
// import ReactCrop  from "react-image-crop";

// function NewDragCrop() {
//   const imgRef = useRef();
//   const [image, setImage] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 9 / 16 });
//   const [completeCrop, setCompleteCrop] = useState();

//   const handleImageChange = (event) => {
//     const { file } = event.target;
//     if (file.length > 0) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file[0]);
//       reader.addEventListener("load", () => {
//         setImage(reader.result);
//       });
//     }
//   };
//   return (
//     <div onClick={() => imgRef.current.click()} style={DropzonStyle}>
//       <input
//         type="file"
//         accept="image/*"
//         ref={imgRef}
//         onChange={handleImageChange}
//         style={{ display: "none" }}
//       />

//       {image && <ReactCrop src={image} crop = {crop} onChange={(c) => setCrop(c)} onComplete = {(c) => setCompleteCrop(c)} />}
//       <button>Upload</button>
//       <button>Clear</button>
//     </div>
//   );
// }

// export default NewDragCrop;
