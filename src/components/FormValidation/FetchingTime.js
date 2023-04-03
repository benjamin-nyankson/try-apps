import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FetchingTime() {
  const [loadingTime, setLoadingTime] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const t0 = performance.now();
        const res = await axios.get("http://localhost:8000/movie/");
        const t1 = performance.now();
        setData(res?.data);
        setLoadingTime(((t1 - t0) / 1000).toFixed(3));
      } catch (error) {}
    };
    fetch();
  }, []);
  return (
    <div
      style={{
        width: "90%",
        margin: "200px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "50px",
      }}
    >
      FetchingTime
      <p>
        {data?.length && (
          <>
            {" "}
            {data?.length} results in {loadingTime} seconds
          </>
        )}
      </p>
    </div>
  );
}
