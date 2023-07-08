import { useState, useEffect } from 'react';
import { UPCOMING_MOVIES, POPULAR } from './utils/apiUrl';
import axios from 'axios';
import { fetchDataFromApi } from './utils/api';

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

const App = () => {
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

    fetchDataFromApi(setMovieData, POPULAR);
  }, []); // The empty array ensures the effect only runs once on component mount

  if (!movieData || movieData.length === 0) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
