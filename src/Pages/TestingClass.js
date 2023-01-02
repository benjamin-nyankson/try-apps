// import React, { Component } from "react";
// import Dropzone from "react-dropzone";
// import ReactCrop from "react-image-crop";
// import "./custom-image-crop.css";
// import { drop, zone } from "./style";

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import { TextField } from "@mui/material";

// import {
//   base64StringtoFile,
//   downloadBase64File,
//   extractImageFileExtensionFromBase64,
//   image64toCanvasRef,
// } from "./ReusableUtils";

// const imageMaxSize = 1000000000; // bytes
// const acceptedFileTypes =
//   "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
// const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
//   return item.trim();
// });

// class ImgCrop extends Component {
//   constructor(props) {
//     super(props);
//     this.imagePreviewCanvasRef = React.createRef();
//     this.fileInputRef = React.createRef();
//     this.state = {
//       imgSrc: null,
//       imgSrcExt: null,
//       crop: {
//         aspect: 1 / 1,
//       },
//     };
//   }

//   verifyFile = (files) => {
//     if (files && files.length > 0) {
//       const currentFile = files[0];
//       const currentFileType = currentFile.type;
//       const currentFileSize = currentFile.size;
//       if (currentFileSize > imageMaxSize) {
//         alert(
//           "This file is not allowed. " + currentFileSize + " bytes is too large"
//         );
//         return false;
//       }
//       if (!acceptedFileTypesArray.includes(currentFileType)) {
//         alert("This file is not allowed. Only images are allowed.");
//         return false;
//       }
//       return true;
//     }
//   };

//   handleOnDrop = (files, rejectedFiles) => {
//     if (rejectedFiles && rejectedFiles.length > 0) {
//       this.verifyFile(rejectedFiles);
//     }

//     if (files && files.length > 0) {
//       const isVerified = this.verifyFile(files);
//       if (isVerified) {
//         // imageBase64Data
//         const currentFile = files[0];
//         const myFileItemReader = new FileReader();
//         myFileItemReader.addEventListener(
//           "load",
//           () => {
//             // console.log(myFileItemReader.result)
//             const myResult = myFileItemReader.result;
//             this.setState({
//               imgSrc: myResult,
//               imgSrcExt: extractImageFileExtensionFromBase64(myResult),
//             });
//           },
//           false
//         );

//         myFileItemReader.readAsDataURL(currentFile);
//       }
//     }
//   };

//   handleImageLoaded = (image) => {
//     //console.log(image)
//   };
//   handleOnCropChange = (crop) => {
//     this.setState({ crop: crop });
//   };
//   handleOnCropComplete = (crop, pixelCrop) => {
//     //console.log(crop, pixelCrop)

//     const canvasRef = this.imagePreviewCanvasRef.current;
//     const { imgSrc } = this.state;
//     image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
//   };
//   handleDownloadClick = (event) => {
//     event.preventDefault();
//     const { imgSrc } = this.state;
//     if (imgSrc) {
//       const canvasRef = this.imagePreviewCanvasRef.current;

//       const { imgSrcExt } = this.state;
//       const imageData64 = canvasRef.toDataURL("image/" + imgSrcExt);

//       const myFilename = "previewFile." + imgSrcExt;

//       // file to be uploaded
//       const myNewCroppedFile = base64StringtoFile(imageData64, myFilename);
//       console.log(myNewCroppedFile);
//       // download file
//       downloadBase64File(imageData64, myFilename);
//       this.handleClearToDefault();
//     }
//   };

//   handleClearToDefault = (event) => {
//     if (event) event.preventDefault();
//     const canvas = this.imagePreviewCanvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     this.setState({
//       imgSrc: null,
//       imgSrcExt: null,
//       crop: {
//         aspect: 1 / 1,
//       },
//     });
//     // this.fileInputRef.current.value = null
//   };

//   handleFileSelect = (event) => {
//     // console.log(event)
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       const isVerified = this.verifyFile(files);
//       if (isVerified) {
//         // imageBase64Data
//         const currentFile = files[0];
//         const myFileItemReader = new FileReader();
//         myFileItemReader.addEventListener(
//           "load",
//           () => {
//             // console.log(myFileItemReader.result)
//             const myResult = myFileItemReader.result;
//             this.setState({
//               imgSrc: myResult,
//               imgSrcExt: extractImageFileExtensionFromBase64(myResult),
//             });
//           },
//           false
//         );

//         myFileItemReader.readAsDataURL(currentFile);
//       }
//     }
//   };

//   render() {
//     const { imgSrc } = this.state;
//     return (

//         <div>
//     <p>Hello testings</p>
//     <div style={drop}>
//     <h1>Drop and Crop</h1>
//     <img src={imgSrc} alt =''/>
//     <TextField ref={this.fileInputRef} type='file' accept={acceptedFileTypes} multiple={false} onChange={this.handleFileSelect} />

//     {/* {imgSrc !== null ? ( */}
//           <div style={zone}>
//             <ReactCrop
//               src={imgSrc}
//               crop={this.state.crop}
//               onImageLoaded={this.handleImageLoaded}
//               onComplete={this.handleOnCropComplete}
//               onChange={this.handleOnCropChange}
//             />

//             <br />
//             <p>Preview Canvas Crop </p>
//             <canvas ref={this.imagePreviewCanvasRef}></canvas>
//             <button onClick={this.handleDownloadClick}>Download</button>
//             <button onClick={this.handleClearToDefault}>Clear</button>
//           </div>
//         {/* ) : (
//           <Dropzone
//             onDrop={this.handleOnDrop}
//             accept={acceptedFileTypes}
//             multiple={false}
//             maxSize={imageMaxSize}
//             style={zone}
//           >
//             <p>
//               <span style={{ color: "blue" }}> Click to upload</span> or drag
//               and drop{" "}
//             </p>
//             <p>SVG, PNG or GIF (max. 800x400px)</p>
//           </Dropzone>
//         )} */}
//         </div>
//     </div>

//     );
//   }
// }
// export default ImgCrop;
