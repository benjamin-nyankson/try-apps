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
import DropzoneComponent from "./Pages/DropzoneTwo";
import Dropzone2Component from "./Pages/DropZone3";
import ImageCompressor from "./Pages/ImageCompressor";
import LoadingSinner from "./Pages/MUISkeleton";
import Login from "./Pages/Login";
import UploadFile from "./Pages/UploadFile";
import UploadImgFile from "./Pages/UploadImagePage";

import DropBox from "./Pages/Dropbox";
import Users from "./Pages/Users/Users";
import Testing from "./Pages/Testing";
import UpdateUser from "./Pages/Users/AddUser";
import Layout from "./Layouts/Layout";
import MyDropZone from "./Pages/MyDropZone";
import Download from "./Pages/Download";
import GrayScale from "./Pages/GrayScale";
import ReactOtp from "./components/ReactOtp";
import Paginate from "./components/Pagination/Paginate";
import LoadingPage from "./LoadingButton/LoadingPage";
import Movies from "./Movies/Movies";
import DisabledButton from "./DisabledButton/DisabledButton";
import UserList from "./DynamicPageRouting/UserList";
import UserPage from "./DynamicPageRouting/userPage";
import CardSlider from "./components/CardSlider";
import MoviePage from "./components/MoviePage";
import TitleExtraction from "./Pages/TitleExtraction";
import MapWithIcons from "./components/MapWithIcons";
import MapWithIconPage from "./components/MapWithIconPage";
import MapIntoTable from "./components/MapIntoTable";
import MapIntoTableUserPage from "./components/MapIntoTableUserPage";
import Quiz from "./Quiz/Quiz";
import Quiz1 from "./Quiz/Quiz1";
import FormWithoutMap from "./components/FormValidation/FormWithoutMap";
import FormWithMap from "./components/FormValidation/FormWithMap";
import FetchingTime from "./components/FormValidation/FetchingTime";
import FetchWithUpdate from "./components/FormValidation/FetchWithUpdate";
import Map from "./components/CHARTS AND MAPS/Map";
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
        <Route path="/otp" element={<ReactOtp />} />
        <Route path="/paginate" element={<Paginate />} />
        <Route path="/load" element={<LoadingPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/disable" element={<DisabledButton />} />
        <Route exact path="/UserList" element={<UserList />} />
        <Route path="/userPage/:id" element={<UserPage />} />
        <Route exact path="/slider" element={<CardSlider />} />
        <Route exact path="/MoviePage/:id" element={<MoviePage />} />
        <Route exact path="/extract" element={<TitleExtraction />} />
        <Route exact path="/map" element={<MapWithIcons />} />
        <Route path="/MapWithIconPage/:page" element={<MapWithIconPage />} />
        <Route path="table" element={<MapIntoTable />} />
        <Route path="user/:fname" element={<MapIntoTableUserPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="quiz1" element={<Quiz1 />} />
        <Route path="form" element={<FormWithoutMap />} />
        <Route path="form1" element={<FormWithMap />} />
        <Route path="fetch" element={<FetchingTime />} />
        <Route path="update" element={<FetchWithUpdate />} />
        <Route path="map1" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
