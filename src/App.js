import "./index.css";

// import ReactCrop from './Pages/DropZone'
// import ImageCrop from'./Pages/ImageCrop'
// import MuiTabs from './Pages/muiTabs'
// import ImgDropAndCrop from './Pages/DropzoneOne'
// import GoogleDrive from './Pages/uploadFromGoogleDrive'
// import New from './Pages/NewDragCrop'
// import Drop from "./Pages/DropZone";
// import Image from "./Pages/Image";
// import Testing from './Pages/TestingClass'
// import Final from './Pages/CROPPING/Final'
//  import ImgCropper from './Pages/Cropper'
// import TryingUpload from './Pages/TryingUpload'
// import Upload from './Pages/UPLOAD/Upload'
// import FromStorage from './Pages/UPLOAD/UploadFromStorage'
// import { Route, Routes } from 'react-router-dom'
// import ImageTest from "./Pages/ImageTest";
// import ImageTest1 from "./Pages/ImageTest1";
import FromDrive from "./Pages/UPLOAD/UploadFromDrive";
// import ImageLink from "./Pages/ImageLink";
// import DropBox from "./Pages/DropBox";
// import OneDrive from './Pages/OnedrivePicker'
// import DropzoneComponent from "./Pages/DropzoneTwo";
// import ImageCompressor from "./Pages/ImageCompressor";
import LoadingSinner from "./Pages/MUISkeleton";
import Login from "./Pages/Login";


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/upload' element = {<Upload/>} />
        <Route path='/drive' element = {<FromDrive/>} />
        <Route path='/storage' element = {<FromStorage/>} />
      </Routes> */}

      {/* <ImageTest /> */}
      {/* <ImageTest1 /> */}
      {/* <ImageLink /> */}
      {/* <FromDrive /> */}
      {/* <DropBox /> */}

      {/* <Drop /> */}
      {/* <Image /> */}
    
    <FromDrive />
    </div>
  );
}

export default App;
