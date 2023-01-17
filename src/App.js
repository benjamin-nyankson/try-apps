import "./index.css";

// import ReactCrop from './Pages/DropZone'
// import ImageCrop from'./Pages/ImageCrop'
// import MuiTabs from './Pages/muiTabs'
// import ImgDropAndCrop from './Pages/DropzoneOne'
// import GoogleDrive from './Pages/uploadFromGoogleDrive'
// import New from './Pages/NewDragCrop'
// import Drop from "./Pages/DropZone";
// import DropTwo from "./Pages/DropzoneTwo";
// import Image from "./Pages/Image";
// import Testing from './Pages/TestingClass'
// import Final from './Pages/CROPPING/Final'
//  import ImgCropper from './Pages/Cropper'
// import TryingUpload from './Pages/TryingUpload'
// import Upload from './Pages/UPLOAD/Upload'
// import FromStorage from './Pages/UPLOAD/UploadFromStorage'
import { Route, Routes } from "react-router-dom";
// import ImageTest from "./Pages/ImageTest";
// import ImageTest1 from "./Pages/ImageTest1";
// import FromDrive from "./Pages/UPLOAD/UploadFromDrive";
// import ImageLink from "./Pages/ImageLink";
// import OneDrive from './Pages/OnedrivePicker'
// import DropzoneComponent from "./Pages/DropzoneTwo";
// import ImageCompressor from "./Pages/ImageCompressor";
// import LoadingSinner from "./Pages/MUISkeleton";
// import Login from "./Pages/Login";
// import UploadFile from "./Pages/UploadFile";
// import UploadImgFile from "./Pages/UploadImagePage";
// import Onedrive from './Pages/OneDrive'
// import DropBox from "./Pages/Dropbox";
import Users from "./Pages/Users/Users";
import Testing from "./Pages/Testing";
import UpdateUser from "./Pages/Users/AddUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UpdateUser />} />
        <Route path="/users" element={<Users />} />
      </Routes>

      {/* <UpdateUser /> */}
    </div>
  );
}

export default App;
