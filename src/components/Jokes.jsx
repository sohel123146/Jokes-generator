import React, { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const fetchJokes = async () => {
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart";
    let data = await fetch(url);
    let response = await data.json();
    setJoke(response);
  };

  const handleClick = () => {
    fetchJokes();
  };

  return (
    <div className="container">
      <div
        className="btn-container"
      >
        <button
          style={{ borderRadius: "20px", padding: "10px" }}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Generate a random joke
        </button>
      </div>
        <div className="jokes">
          <h1>{joke.setup}</h1>
          <h1>{joke.delivery}</h1>
        </div>
    </div>
  );
};

export default Jokes;
