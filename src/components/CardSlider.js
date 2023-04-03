import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardSlider.css";
import { Link } from "react-router-dom";
const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards, setCards] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get("http://localhost:8000/movie/");
        console.log(data?.data);
        setCards(data?.data);
      } catch (error) {}
    };
    fetch();
  }, []);
  //   const cards = [
  //     { title: "Card 1", content: "Lorem ipsum dolor sit amet" },
  //     { title: "Card 2", content: "Consectetur adipiscing elit" },
  //     { title: "Card 3", content: "Sed do eiusmod tempor incididunt" },
  //     { title: "Card 4", content: "Ut labore et dolore magna aliqua" },
  //     { title: "Card 5", content: "Lorem ipsum dolor sit amet" },
  //     { title: "Card 6", content: "Consectetur adipiscing elit" },
  //     { title: "Card 7", content: "Sed do eiusmod tempor incididunt" },
  //     { title: "Card 8", content: "Ut labore et dolore magna aliqua" },
  //   ];

  const handleSwipe = (direction) => {
    if (direction === "right" && currentCard < cards?.length - 1) {
      setCurrentCard(currentCard + 1);
    } else if (direction === "left" && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCard < cards?.length - 1) {
        setCurrentCard(currentCard + 1);
      } else {
        setCurrentCard(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentCard, cards?.length]);
  return (
    <div className="card-slider">
      <div
        className="card-slider-inner"
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cards?.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.image_link}
              alt=""
              style={{ width: "300px" }}
              className="images"
            />
            <Link to={`/MoviePage/${card.id}`}>
              <h2>{card.file_name}</h2>
            </Link>
            <p>{card.source}</p>
            <p style={{ textAlign: "center" }}>{card.date_scraped}</p>
          </div>
        ))}
      </div>
      <br />
      <button
        className="swipe-left"
        onClick={() => handleSwipe("left")}
        style={{ color: "blue" }}
      >
        &lt;
      </button>
      <button
        className="swipe-right"
        onClick={() => handleSwipe("right")}
        style={{ color: "blue" }}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
