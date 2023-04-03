import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
export default function DisabledButton() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const handleVal1 = (e) => {
    setVal1(e.target.value);

    // if (val1.length < 8) {
    //   setDisable(true);
    // } else {
    setDisable(val2 === "" || e.target.value === "");
    // }
  };
  const handleVal2 = (e) => {
    setVal2(e.target.value);

    // if (val2.length < 8) {
    //   setDisable(true);
    // } else {
    // setDisable(val1 === "" || e.target.value === "");
    // }
  };

  //   useEffect(() => {
  //     if (val1.length >= 1 && val1.length < 8) {
  //       setError("Val1 must be more than 8 characters");
  //       setDisable(true);
  //     } else {
  //       setError("");
  //     }

  //     if (val2.length >= 1 && val2.length < 8) {
  //       setError("Val2 must be more than 8 characters");
  //       setDisable(true);

  //     }
  //     else if (val1.length >= 8 && val2.length >= 8) {
  //       setError("");
  //       setDisable(false);
  //     }
  //   }, [val1, val2]);

  // for pass confirmation

  useEffect(() => {
    if (val1.length >= 1 && val1.length < 8) {
      setError("Val1 must be more than 8 characters");
      setDisable(true);
    } else if (val1 !== val2) {
      setError("Values does not match");
      setDisable(true);
    } else if (val1.length >= 8 && val1 === val2) {
      setError("");
      setDisable(false);
    }
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    const data = { val1: val1, val2: val2 };
    console.log(data);
  };

  return (
    <form onSubmit={hadleSubmit}>
      <span>{error}</span>
      <br />
      <input type="text" value={val1} onChange={handleVal1} />
      <br />

      <br />
      <input type="text" value={val2} onChange={handleVal2} />
      <br />
      <br />
      <Button type="submit" variant="contained" disabled={disable}>
        Submit
      </Button>
    </form>
  );
}
