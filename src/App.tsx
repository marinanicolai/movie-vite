import { useState, useEffect } from 'react';
import { UPCOMING_MOVIES } from './utils/apiUrl';
import axios from 'axios';

import Home from './pages/home/Home';
// Define a type for the movie data
type MovieData = {
  original_title: string;
  overview: string;
  id: string;
  release_date: string;
  poster_path: string;
  // Add more properties as needed
};

const MovieComponent = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3${UPCOMING_MOVIES}?api_key=${apiKey}`
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []); // The empty array ensures the effect only runs once on component mount

  if (!movieData || movieData.length === 0) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }

  return (
    <div>
      <Home />
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

export default MovieComponent;
