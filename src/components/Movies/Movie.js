import React from "react";

const Movie = (props) => {
  return (
    <li key={props.id}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p>{props.id}</p>
      <button onClick={()=>props.deletingMovie(props.movieId)}>Delete Movie</button>
    </li>
  );
};

export default Movie;
