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
          // Controlliamo che la risposta contenga la proprietà "Search"
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
    <div className="text-white">
      <h2>Harry Potter</h2>
      <Carousel movies={harryPotter} />
      <h2>Il Signore degli Anelli</h2>
      <Carousel movies={lordOfTheRings} />
      <h2>Star Wars</h2>
      <Carousel movies={starWars} />
    </div>
  );
}

export default Homepage;
