import { useState } from "react";
import "./CSS/RandomQuote.css";
import load_icon from "./Assets/reload.png";
import twitter_icon from "./Assets/twitter.png";

const RandomQuote = () => {
  let quotes = [];

  // Get quotes from an API and save them in the quotes variable
  const loadQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  };

  // useState hook to set an initial quote
  const [quote, setQuote] = useState({
    text: "Well begun is halfway done.",
    author: "Aristotle",
  });

  // Select a quote randomly from the quotes array
  const random = () => {
    const selectQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectQuote);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={load_icon}
              alt=""
              onClick={() => {
                random();
              }}
            />
            <img
              src={twitter_icon}
              onClick={() => {
                twitter();
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
