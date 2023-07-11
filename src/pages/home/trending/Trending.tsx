import { useState, useEffect } from 'react';
import { TRENDING } from '../../../utils/apiUrl';
import { fetchDataFromApi } from '../../../utils/api';

type MovieData = {
  original_title: string;
  overview: string;
  id: string;
  release_date: string;
  poster_path: string;
  // Add more properties as needed
};

// interface SearchButtonProps {
//   onSearchByDay: () => void;
//   onSearchByWeek: () => void;
// }

const Trending = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);

  useEffect(() => {
    fetchDataFromApi(setMovieData, TRENDING);
  }, []); // The empty array ensures the effect only runs once on component

  const handleSearchByDay = () => {
    // Logic for searching trending movies by day
    // Implement the desired functionality here
  };

  const handleSearchByWeek = () => {
    // Logic for searching trending movies by week
    // Implement the desired functionality here
  };

  if (!movieData || movieData.length === 0) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }

  return (
    <div>
      <h1>top TRENDING list</h1>
      <div>
        <button onClick={handleSearchByDay}>
          Search Trending Movies by Day
        </button>
        <button onClick={handleSearchByWeek}>
          Search Trending Movies by Week
        </button>
      </div>
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

export default Trending;
