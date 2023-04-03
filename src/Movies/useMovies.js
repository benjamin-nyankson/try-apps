import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function useMovies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("http://localhost:8000/movie/");
      //   console.log(response);
      setData(response.data);
    };
    fetchMovies();
  }, [data]);
  return [data];
}

export default useMovies;
