// import Footer from "./components/Layout/Footer";
// import Header from "./components/Layout/Header";

import MovieList from "./components/Movies/MovieList";
import React, { useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler =( async () => {
   
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const loadMovies = [];
      for (let key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadMovies);
  });

  return (
    <div>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      <MovieList movies={movies} />
      {/* <Header/>

<Footer/> */}
    </div>
  );
}

export default App;
