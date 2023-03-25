// import Footer from "./components/Layout/Footer";
// import Header from "./components/Layout/Header";

import MovieList from "./components/Movies/MovieList";
import React, { useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const[isLoading,setIsLoading]=useState(false);
  const fetchMoviesHandler =( async () => {
    setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const loadMovies=data.results.map((film)=>{
        return{
          id:film.id,
          title:film.title,
          openingText:film.openingText,
          releaseDate:film.releaseDate
        }
      })

      setMovies(loadMovies);
      setIsLoading(false)
  });

  return (
    <div>
      <section><button onClick={fetchMoviesHandler}>Fetch Movies</button>
      {!isLoading && <MovieList movies={movies} />}
      {isLoading && <p>Loading...</p>}
      </section>
      {/* <Header/>

<Footer/> */}
    </div>
  );
}

export default App;
