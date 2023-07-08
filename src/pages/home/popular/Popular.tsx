import { useState, useEffect } from 'react';
import { POPULAR } from '../../../utils/apiUrl';
import { fetchDataFromApi } from '../../../utils/api';

type MovieData = {
  original_title: string;
  overview: string;
  id: string;
  release_date: string;
  poster_path: string;
  // Add more properties as needed
};

const Top_rated = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);

  useEffect(() => {
    fetchDataFromApi(setMovieData, POPULAR);
  }, []); // The empty array ensures the effect only runs once on component mount

  if (!movieData || movieData.length === 0) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }

  return (
    <div>
      <h1>popular list</h1>
      {movieData.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      ))}
    </div>
  );
};

export default Top_rated;
