import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function MoviePage() {
  const [cards, setCards] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get("http://localhost:8000/movie/");
        // console.log(data?.data);
        setCards(data?.data);
      } catch (error) {}
    };
    fetch();
  }, []);

  const card = cards?.find((card) => card.id === Number(id));

  //   useEffect(() => {
  //     console.log(card);
  //   });
  return (
    <div
      style={{
        width: "500px",
        // height: "600px",
        margin: "auto",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {card && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className ="moviePage"
        >
          <img src={card.image_link} alt="" style={{ width: "300px" }} />
          <p style={{ color: "blue" }}>{card.file_name}</p>
          <p
            style={{
              color: "white",
              padding: "5px",
              fontSize: "20px",
              textAlign: "center",
              background: "blue",
            }}
          >
            {card.description}
          </p>

          <p>{card.date_scraped}</p>
          <Link to="/slider">Back</Link>
        </div>
      )}
    </div>
  );
}

export default MoviePage;
