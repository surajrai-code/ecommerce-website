// import Footer from "./components/Layout/Footer";
// import Header from "./components/Layout/Header";

import MovieList from "./components/Movies/MovieList";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const[isLoading,setIsLoading]=useState(false);
  const [error, setError] = useState(null);
  
  const fetchMoviesHandler =useCallback( async () => {
    try{
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films/")
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
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
    }
    catch(error){
      setError(error.message);
    }
    
      setIsLoading(false)
  },[]);
  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler])
  return (
    <div>
    <section><button onClick={fetchMoviesHandler}>Fetch Movies</button></section>
      <section>
      {!isLoading && <MovieList movies={movies} />}
      {!isLoading && error && <p>{error} </p>}
      {isLoading && <p>Loading...</p>}
      </section>
      {/* <Header/>

<Footer/> */}
    </div>
  );
}

export default App;
