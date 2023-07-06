import { useState, useEffect } from 'react';
import { TRENDING_ALL } from '../../../utils/apiUrl';
import axios from 'axios';
import { fetchDataFromApi } from '../../../utils/api';

type MovieData = {
  original_title: string;
  overview: string;
  id: string;
  release_date: string;
  poster_path: string;
  // Add more properties as needed
};

const Trending = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);

  useEffect(() => {
    // const fetchMovieData = async () => {
    //   const apiKey = import.meta.env.VITE_API_KEY;
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3${POPULAR}?api_key=${apiKey}`
    //     );
    //     setMovieData(response.data.results);
    //   } catch (error) {
    //     console.error('Error fetching movie data:', error);
    //   }
    // };

    fetchDataFromApi(setMovieData, TRENDING_ALL);
  }, []); // The empty array ensures the effect only runs once on component mount
  console.log('this is movie data from trending' + movieData);
  if (!movieData || movieData.length === 0) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }

  return (
    <div>
      <h1>trending list</h1>
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
