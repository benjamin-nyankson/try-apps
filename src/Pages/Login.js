import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleEmailChange = () =>{

    }

    const handlePassChange = () =>{

    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div style={{ margin: "0px auto", width: "50%" }}>
      <br />
      <form action="">
      <TextField
        type="email"
        value={password}
        placeholder="Email"
        onChange={handlePassChange}
        fullWidth
      />
      <br />
      <br />
       
      <TextField
        type="password"
        value={email}
        placeholder="Password"
        onChange={handleEmailChange}
        fullWidth
      />
      <br />
      <br />
      <Button fullWidth type="submit" variant="contained" onClick={handleSubmit}>submit</Button>
      </form>
    </div>
  );
}

export default Login;
