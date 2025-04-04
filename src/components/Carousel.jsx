import React from "react";

function Carousel({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {movies.map((movie) => (
        <div className="col mb-2 text-center px-1" key={movie.imdbID}>
          <img
            className="img-fluid"
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
