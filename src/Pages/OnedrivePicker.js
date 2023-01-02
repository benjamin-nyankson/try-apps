import {ReactOneDriveFilePicker} from "react-onedrive-filepicker";
import {OneDrive} from "react-onedrive-filepicker";
export default function App() {
  const KEY = "4bcfc4da-b7b1-4bb4-a029-c41ff46a2351";
  const handleCancel = () => console.log("CANCELLED");

  const handleSuccess = (files) => console.log("SUCCESS: ", files);

  const handleError = (err) => console.log("ERROR: ", err);

  var launchOneDrivePicker = function (
    oneDriveApplicationId,
    action,
    multiSelect,
    advancedOptions
  ) {
    return new Promise(function (resolve, reject) {
      var odOptions = {
        clientId: oneDriveApplicationId,
        action: action || "download",
        multiSelect: multiSelect || true,
        openInNewWindow: true,
        advanced: advancedOptions || {},
        success: function (files) {
          handleSuccess(files);
        },
        cancel: function () {
          handleCancel();
        },
        error: function (e) {
          handleError(e);
        },
      };
      ReactOneDriveFilePicker.open(odOptions);
    });
  };

  return (
    <div className="App">
      <button onClick={() => launchOneDrivePicker(KEY, "share")}>
        Click here
      </button>
    </div>
  );
}
