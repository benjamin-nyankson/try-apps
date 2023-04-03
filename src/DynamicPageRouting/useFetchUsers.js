import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useFetchUsers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:8000/Users");
        setData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);
  return [data];
}
