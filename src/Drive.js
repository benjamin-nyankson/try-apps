import React, { useState, useRef, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
// import { google } from '@google-cloud/drive';

const DisplayFile = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [file, setFile] = useState(null);
  const [drive, setDrive] = useState();

  const googleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      googleRef.current = window.google;
      const google = googleRef.current;
      const drives = new google.OAuth2.initTokenClient(
        process.env.REACT_APP_CLIENT_ID,
        process.env.REACT_APP_CLIENT_SECRET,
        process.env.REACT_APP_GOOGLE_REDIRECT_URI
      );

      setDrive(drives);
    }, 3000);
  });

  const onLoginSuccess = (response) => {
    setAccessToken(response.accessToken);
    setIsSignedIn(true);
  };

  const onLoginFailure = (response) => {
    console.error(response);
  };

  const getFile = () => {
    const fileId = "your-file-id";

    drive.setCredentials({
      access_token: accessToken,
    });

    drive.files.get({ fileId }, (err, res) => {
      if (err) return console.error(err);
      setFile(res.data);
    });
  };

  return (
    <div>
      {isSignedIn ? (
        <div>
          You are signed in!
          <button onClick={() => setIsSignedIn(false)}>Sign out</button>
          <button onClick={getFile}>Get file</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {file && (
        <div>
          <h1>{file.name}</h1>
          <p>{file.description}</p>
          <img src={file.thumbnailLink} alt={file.name} />
        </div>
      )}
    </div>
  );
};

export default DisplayFile;
