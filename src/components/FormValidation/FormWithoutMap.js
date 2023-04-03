import React, { useState } from "react";
import { TextField, FormControl, Box, Button } from "@mui/material";
function FormWithoutMap() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    const { fname, lname, email, password, confirmPassword } = formData;
    const errors = {};

    if (!fname) {
      errors.fname = "First name is required";
    }
    if (!lname) {
      errors.lname = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password <= 6) {
      errors.password = "Password must be more 6 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setError(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };
  return (
    <Box>
      <form
        style={{
          width: "80%",
          margin: "100px auto",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ textAlign: "center" }}>Create an account</h2>
        <TextField
          type="text"
          name="fname"
          placeholder="First Name"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.fname}
          onChange={handleChange}
        />
        {error.fname && <span style={{ color: "red" }}>{error.fname}</span>}
        <TextField
          type="text"
          name="lname"
          placeholder="Last Name"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.lname}
          onChange={handleChange}
        />
        {error.lname && <span style={{ color: "red" }}>{error.lname}</span>}

        <TextField
          type="text"
          name="email"
          placeholder="Email"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}

        <TextField
          type="password"
          name="password"
          placeholder="Password"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && (
          <span style={{ color: "red" }}>{error.password}</span>
        )}

        <TextField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          fullWidth
          sx={{ mt: 2 }}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error.confirmPassword && (
          <span style={{ color: "red" }}>{error.confirmPassword}</span>
        )}

        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          SIgnup
        </Button>
      </form>
    </Box>
  );
}

export default FormWithoutMap;
