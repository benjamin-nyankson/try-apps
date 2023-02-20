import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Grid, Paper } from "@mui/material";
import MyPaginate from "./MyPaginate";
function Paginate() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log(value);
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  console.log(data.length);
  return (
    <div>
      <MyPaginate pageData={pageData} />
      {/* {pageData.map((item) => (
        <p>{item.name}</p>
      ))} */}
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        onClick={handleClick}
      />
    </div>
  );
}

export default Paginate;
