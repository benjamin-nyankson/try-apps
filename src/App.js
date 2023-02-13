import "./index.css";

import ReactCrop from "./Pages/DropZone";
import ImageCrop from "./Pages/ImageCrop";
import MuiTabs from "./Pages/muiTabs";
import ImgDropAndCrop from "./Pages/DropzoneOne";
import GoogleDrive from "./Pages/uploadFromGoogleDrive";
import New from "./Pages/NewDragCrop";
import Drop from "./Pages/DropZone";
import DropTwo from "./Pages/DropzoneTwo";
import Image from "./Pages/Image";
import Final from "./Pages/CROPPING/Final";
import ImgCropper from "./Pages/Cropper";
import TryingUpload from "./Pages/TryingUpload";
import Upload from "./Pages/UPLOAD/Upload";
import FromStorage from "./Pages/UPLOAD/UploadFromStorage";
import { Route, Routes } from "react-router-dom";
import ImageTest from "./Pages/ImageTest";
import ImageTest1 from "./Pages/ImageTest1";
import FromDrive from "./Pages/UPLOAD/UploadFromDrive";
import ImageLink from "./Pages/ImageLink";
import OneDrive from "./Pages/OnedrivePicker";
import DropzoneComponent from "./Pages/DropzoneTwo";
import Dropzone2Component from "./Pages/DropZone3";
import ImageCompressor from "./Pages/ImageCompressor";
import LoadingSinner from "./Pages/MUISkeleton";
import Login from "./Pages/Login";
import UploadFile from "./Pages/UploadFile";
import UploadImgFile from "./Pages/UploadImagePage";
// import Onedrive from "./Pages/OneDrive";
import DropBox from "./Pages/Dropbox";
import Users from "./Pages/Users/Users";
import Testing from "./Pages/Testing";
import UpdateUser from "./Pages/Users/AddUser";
import Layout from "./Layouts/Layout";
import MyDropZone from "./Pages/MyDropZone";
import Download from "./Pages/Download";
import GrayScale from "./Pages/GrayScale";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ImageLink />} />
        <Route path="/download" element={<Download />} />
        <Route path="/crop" element={<ReactCrop />} />
        <Route path="/imageCrop" element={<ImageCrop />} />
        <Route path="/MuiTabs" element={<MuiTabs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/image" element={<ImageLink />} />
        <Route path="/compress" element={<ImageCompressor />} />
        {/* <Route path="/drop" element={<DropzoneComponent />} /> */}
        {/* <Route path="/drop" element={<Dropzone2Component />} /> */}
        <Route path="/gray" element={<GrayScale />} />
        <Route path="/drop" element={<MyDropZone />} />
        <Route path="/drive" element={<FromDrive />} />
      </Routes>
    </div>
  );
}

export default App;
