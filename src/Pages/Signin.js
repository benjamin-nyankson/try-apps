import React, { useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
export default function () {
  const googleRef = useRef(null);
  const [tokenClient, setTokenClient] = useState({});

  function handleCallbackResponse(response) {
    console.log("encoded", response.credential);

    const obj = jwtDecode(response.credential);
    console.log(obj);
  }

  function createDriveFile() {
    tokenClient.requestAccessToken();
  }

  useEffect(() => {
    setTimeout(() => {
      tokenClient.requestAccessToken();
    }, 3000);
  });

  useEffect(() => {
    setTimeout(() => {
    googleRef.current = window.google;
    const google = googleRef.current;
    console.log("google", google);
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_LOGIN_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outlines",
      size: "large",
    });

    setTokenClient(
      google.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_LOGIN_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/drive",
        callback: (tokenResponse) => {
          console.log(tokenResponse.access_token);
        },
      })
    );
    }, 1000);
  }, []);
  return (
    <div>
      <div id="signInDiv"></div>
      <input type="submit" onClick={createDriveFile} />
    </div>
  );
}
