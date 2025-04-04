import React, { useState } from "react";
import Carousel from "./Carousel";

function Homepage() {
  const [harryPotter, setHarryPotter] = useState([]);
  const [lordOfTheRings, setLordOfTheRings] = useState([]);
  const [starWars, setStarWars] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "ae1a856b";

  // Funzione per recuperare i dati di una serie
  const fetchMovies = (searchTerm, setState) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setState(data.Search);
        } else {
          console.error("Errore: nessun film trovato o errore nell'API");
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  };

  // Chiamate API direttamente nel corpo del componente
  if (loading) {
    fetchMovies("Harry Potter", setHarryPotter);
    fetchMovies("Lord of the Rings", setLordOfTheRings);
    fetchMovies("Star Wars", setStarWars);
    setLoading(false);
  }

  if (loading) {
    return <div>Caricamento...</div>;
  }

  return (
    <div
      className="text-white
    "
    >
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>

        <h4>Harry Potter</h4>
        <Carousel movies={harryPotter} />

        <h4>Il Signore degli Anelli</h4>
        <Carousel movies={lordOfTheRings} />

        <h4>Star Wars</h4>
        <Carousel movies={starWars} />
      </div>
    </div>
  );
}

export default Homepage;
