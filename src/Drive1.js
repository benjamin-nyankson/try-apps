import { useState } from "react";
// import "./styles.css";
import GooglePicker from "react-google-picker";
import { FaGoogle } from "react-icons/fa";
export default function App() {
  const version = "1.52";

  // Google Picker IDs
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_DEVELOP_KEY;
  const APP_ID = "ivory-volt-371911";
  const scope = [
    "https://www.googleapis.com/auth/drive",
    // NOTE: need to relink and reprovide FULL google drive upload access
    // "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.photos.readonly",
  ];

  // state control for Allowed mimetypes
  const LIMITED_MIMETYPES_LIST = [
    "application/vnd.google-apps.presentation",
    "application/vnd.google-apps.spreadsheet",
    "application/vnd.google-apps.document",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];
  const [allowedMimetypes, setAllowedMimetypes] = useState("");
  const onMimetypesValueChange = (e) => {
    const value = e.target.value;
    if (value === "limited")
      setAllowedMimetypes(LIMITED_MIMETYPES_LIST.join(","));
    else if (value === "all") setAllowedMimetypes("");
  };

  return (
    <div className="App">
      <h3>Google Picker Prototype v{version}</h3>
      <div className="mimetypes-container">
        <strong>Allowed File Types:</strong>
        <label>
          <input
            type="radio"
            id="mimetypes_all"
            name="mimetypes"
            value="all"
            checked={allowedMimetypes === ""}
            onChange={onMimetypesValueChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            id="mimetypes_limited"
            name="mimetypes"
            value="limited"
            checked={allowedMimetypes === LIMITED_MIMETYPES_LIST.join(",")}
            onChange={onMimetypesValueChange}
          />
          Limited (Google Docs, Microsoft Office)
        </label>
      </div>
      <GooglePicker
        clientId={CLIENT_ID}
        developerKey={API_KEY}
        scope={scope}
        onAuthFailed={(data) => console.log("on auth failed:", data)}
        // navHidden
        setMimeTypes={allowedMimetypes.split(",")}
        createPicker={(google, oauthToken) => {
          const picker = new google.picker.PickerBuilder()
            // SAMPLE
            // .addView(new google.picker.View(google.picker.ViewId.DOCS_IMAGES))
            // ---
            // [Option #1] one tab holds both "owned by me + shared with me"
            // .addView(new google.picker.DocsView())
            // [Option #2] two seperate tabs: owned by me, shared with me
            .addView(
              new google.picker.DocsView()
                .setOwnedByMe(true)
                .setMimeTypes(allowedMimetypes)
            )
            .addView(
              new google.picker.DocsView()
                .setOwnedByMe(false)
                .setMimeTypes(allowedMimetypes)
            )
            // Upload Tab
            .addView(
              new google.picker.DocsUploadView().setMimeTypes(allowedMimetypes)
            )
            // Shared Organisation Drives Tab
            .addView(new google.picker.DocsView().setEnableDrives(true))
            .enableFeature(window.google.picker.Feature.SUPPORT_DRIVES)
            .setOAuthToken(oauthToken)
            .setDeveloperKey(API_KEY)
            .setAppId(APP_ID)
            .setCallback((data) => {
              if (data.action === google.picker.Action.PICKED) {
                var fileId = data.docs[0].id;
                alert("The user selected: " + fileId);
              }
            });
          // .enableFeature(google.picker.Feature.NAV_HIDDEN)
          // .enableFeature(google.picker.Feature.MULTISELECT_ENABLED);

          picker.build().setVisible(true);
        }}
      >
        <button>
          <FaGoogle color="red" /> Continue with Google
        </button>
      </GooglePicker>
      <br />
      <br />
      <br />
      <br />
      <em>
        <p>
          Note: If you are forking this prototype, do take note that you will
          need to have your own CLIENT_ID, API_KEY & APP_ID.
        </p>
        <p>
          {" "}
          Also, make sure to set the Origin URLs to point to your fork's
          publically acessible URL.
        </p>
      </em>
    </div>
  );
}
