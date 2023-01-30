import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

function App() {
  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.REACT_APP_CLIENT_ID,
      developerKey: process.env.REACT_APP_DEVELOP_KEY,
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
        const docs = data.docs;
        // console.log(URL.createObjectURL(docs));

        var binaryData = [];
        binaryData.push(docs);
        window.URL.createObjectURL(
          new Blob(binaryData, { type: "application/zip" })
        );
        console.log("bin", binaryData[0][0]);
        console.log(URL.createObjectURL(binaryData[0][0].url));
      },
    });
  };

  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default App;
