// import Footer from "./components/Layout/Footer";
// import Header from "./components/Layout/Header";

import AddMovie from './components/Movies/AddMovie'
import MovieList from "./components/Movies/MovieList";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
const DB_URL = 'https://react-http-727c5-default-rtdb.firebaseio.com/movies.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(DB_URL);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(DB_URL, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const deleteMovie = async (id) => {
    const response = await fetch(`DB_URL ${id}`, {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchMoviesHandler();
    const data = await response.json();
    console.log(data);
  }
  let content = <p>Found no movies.</p>;
  
  if (movies.length > 0) {
    content =  <MovieList deleteRequested={deleteMovie}  movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <div>
    {/* <AddMovie/> */}
    {/* <section><button onClick={fetchMoviesHandler}>Fetch Movies</button></section>
      <section>
      {!isLoading && <MovieList movies={movies} />}
      {!isLoading && error && <p>{error} </p>}
      {isLoading && <p>Loading...</p>}
      </section> */}
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
      <section>{content}</section>
      {/* <Header/>

<Footer/> */}
    </div>
  );
}

export default App;
