import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Tablecell,
  Paper,
  TableCell,
  TextField,
  Select,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Send, FilterList } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { user } from "../Constants/User/User";

export default function MapIntoTable() {
  const [filt, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("sort");
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setData(user);

    if (filt) {
      if (filt === "gender") {
        setData(user);
      } else {
        setData(
          user.filter(
            (user) =>
              user.gender.toLowerCase().includes(filt.toLowerCase()) ||
              user.email.toLowerCase().includes(filt.toLowerCase()) ||
              user.fname.toLowerCase().includes(filt.toLowerCase()) ||
              user.lname.toLowerCase().includes(filt.toLowerCase()) ||
              user.contact.includes(filt)
          )
        );
      }
    }

    // switch (sortBy) {
    // case "sort":
    //   setData(user);
    //   break;
    // case "asc":
    //   setData(data.sort((a, b) => a.id - b.id));
    //   break;
    // case "dsc":
    //   setData(data.sort((a, b) => b.id - a.id));
    //   break;
    // }
  });

  const handleFilter = () => {
    if (user) {
      if (user.gender === "male" && user.gender === "female") {
        setData(user.filter((user) => user.gender === "male"));
      }
    }
  };
  return (
    <div>
      <TextField
        placeholder="search"
        value={filt}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* <Select onChange={(e) => setFilter(e.target.value)} value={filt}>
        <MenuItem value="gender">Filter By</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
      <Select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <MenuItem value="sort">Sort By</MenuItem>
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="dsc">Descending</MenuItem>
      </Select> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ fontSize: "3px", fontWeight: "bold" }}>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>
                Gender{" "}
                <IconButton onClick={handleFilter}>
                  <FilterList />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          {data?.length >= 1 ? (
            <TableBody>
              {data?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.fname}</TableCell>
                  <TableCell>{user.lname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.contact}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/user/${user.fname}`)}
                    >
                      view
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell>0 matching results</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
}
