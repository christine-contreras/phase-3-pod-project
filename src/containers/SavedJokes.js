import React from "react";
import Card from "../components/Card";

const SavedJokes = ({ savedJokes, handleJoke, location }) => {
  return (
    <div className="container">
      <h1>Saved Dad Jokes</h1>

      <div className="row">
        {savedJokes.map((joke) => {
          return (
            <Card
              key={joke.date}
              location={location}
              joke={joke}
              handleJoke={handleJoke}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SavedJokes;
