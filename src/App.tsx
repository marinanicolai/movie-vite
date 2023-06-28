import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a type for the movie data
type MovieData = {
  original_title: string;
  overview: string;
  // Add more properties as needed
};

const MovieComponent = () => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/11?api_key=41e17c195babd7c3727fbdd6eb86cfff',
          {
            headers: {
              Authorization: 'Bearer ' + import.meta.env.REACT_APP_API_TOKEN, // assuming the token is stored in an environment variable
            },
          }
        );
        setMovieData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []); // The empty array ensures the effect only runs once on component mount

  if (!movieData) {
    return <div>Loading...</div>; // Display a loading message while the request is in progress
  }

  return (
    <div>
      <h1>{movieData.original_title}</h1>
      {/* //<p>{movieData.overview}</p> */}
      {/* Display more movie data as needed */}
    </div>
  );
};

export default MovieComponent;
