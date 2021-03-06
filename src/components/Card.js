import React from "react";

const Card = ({ joke, handleJoke, location }) => {
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-3 card-container">
        <div id={joke.date} class="card card-rotating text-center">
          <div className="card-inner">
            {/* front */}
            <div class="face front">
              {/* content */}
              <div class="card-body">
                <p class="font-weight-bold">{joke.setup}</p>
                {/* button */}
                <button onClick={() => handleJoke(joke)}>
                  {location.pathname === "/" ? "Save Joke" : "Delete Joke"}
                </button>

                {/* {jokeIsSaved ? (
                  <button onClick={() => handleRemoveJoke(joke)}>
                    Delete Joke
                  </button>
                ) : (
                  <button onClick={() => handleSaveJoke(joke)}>
                    Save Joke
                  </button>
                )} */}
              </div>
            </div>

            {/* back */}
            <div class="face back">
              <div class="card-body">
                <hr />
                <p>{joke.punchline}</p>
                <hr />
                <button onClick={() => handleJoke(joke)}>
                  {location.pathname === "/" ? "Save Joke" : "Delete Joke"}
                </button>
                {/* {jokeIsSaved ? (
                  <button onClick={() => handleRemoveJoke(joke)}>
                    Delete Joke
                  </button>
                ) : (
                  <button onClick={() => handleSaveJoke(joke)}>
                    Save Joke
                  </button>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
