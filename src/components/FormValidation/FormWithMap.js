import React, { useState } from "react";
import { TextField, FormControl, Box, Button } from "@mui/material";

const data = {
  fname: {
    id: 1,
    name: "fname",
    type: "text",
    placeholder: "First Name",
    value: "fname",
  },

  lname: {
    id: 2,
    name: "lname",
    type: "text",
    placeholder: "Last Name",
    value: "lname",
  },

  email: {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    value: "email",
  },
  password: {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    value: "password",
  },
  confirmPassword: {
    id: 4,
    name: "confirmPassword",
    type: "password",
    placeholder: "confirmPassword",
    value: "confirmPassword",
  },
};

function FormWithMap() {
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
    } else if (password.length <= 6) {
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
        <h3 style={{ textAlign: "center" }}>Create an account</h3>
        {Object.keys(data).map((item) => (
          <Box key={item}>
            <TextField
              sx={{ mt: 2 }}
              name={data[item].name}
              placeholder={data[item].placeholder}
              type={data[item].type}
              onChange={handleChange}
              value={formData[item]}
              fullWidth
            />

            {error[item] && <span style={{ color: "red" }}>{error[item]}</span>}
          </Box>
        ))}
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          SIgnup
        </Button>
      </form>
    </Box>
  );
}

export default FormWithMap;
