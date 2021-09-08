import React from "react";

const Card = ({ joke }) => {
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
                <a class="rotate-btn" data-card="card-1">
                  Save Joke
                </a>
              </div>
            </div>

            {/* back */}
            <div class="face back">
              <div class="card-body">
                <hr />
                <p>{joke.punchline}</p>
                <hr />
                <a class="rotate-btn" data-card="card-1">
                  Save Joke
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
