import React, { useState } from "react";
import { API } from "../../services/API";
import { useNavigate } from "react-router";
import UserNavbar from "../../Navbar/UserNavbar";
export default function AddUser() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleTel = (e) => {
    setTel(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fname: fname,
      lname: lname,
      tel: tel,
      text: text,
    };
    try {
      await API.post("users", { ...data });
      // navigate("/Users");
    } catch {}
    console.log(data);
  };
  return (
    <div>
      <UserNavbar />
      <form action="">
        <input
          type="text"
          value={fname}
          placeholder="fname"
          onChange={handleFname}
        />
        <input
          type="text"
          value={lname}
          placeholder="lname"
          onChange={handleLname}
        />
        <input type="text" value={tel} placeholder="tel" onChange={handleTel} />
        <input
          type="text"
          value={text}
          placeholder="text"
          onChange={handleText}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
