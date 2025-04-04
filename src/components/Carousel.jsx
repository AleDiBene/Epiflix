import React from "react";
import "../App.css";

function Carousel({ movies }) {
  const limitedMovies = movies.slice(0, 6); // mostra max 6 film

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {limitedMovies.map((movie) => (
        <div className="col mb-2 text-center px-1" key={movie.imdbID}>
          <img
            className="img-rectangular"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "path/to/default-image.jpg"
            }
            alt={movie.Title}
          />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
