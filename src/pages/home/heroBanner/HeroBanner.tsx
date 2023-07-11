import React, { useState, useEffect } from 'react';
import { UPCOMING_MOVIES } from '../../../utils/apiUrl';
import { fetchDataFromApi } from '../../../utils/api';

type MovieData = {
  original_title: string;
  overview: string;
  id: string;
  release_date: string;
  poster_path: string;
  // Add more properties as needed
};

const HeroBanner: React.FC = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);

  useEffect(() => {
    fetchDataFromApi(setMovieData, UPCOMING_MOVIES);
  }, []);

  if (!movieData || movieData.length === 0) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }
  console.log(movieData);
  return (
    <div className='hero-banner'>
      <div className='backdrop-img'>
        {movieData.length > 0 && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData[0].poster_path}`}
            alt={movieData[0].original_title}
          />
        )}
      </div>
      <h1 className='welcome-text'>Welcome</h1>
      <p className='description'>
        Millions of movies & TV shows to discover. Explore now.
      </p>
      <div className='search-bar'>
        <input type='text' placeholder='Search' />
        <button className='search-button'>Search</button>
      </div>
    </div>
  );
};

export default HeroBanner;
