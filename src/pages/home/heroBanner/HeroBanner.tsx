import React, { useState, useEffect } from 'react';
import { UPCOMING_MOVIES } from '../../../utils/apiUrl';
import { fetchDataFromApi } from '../../../utils/api';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import styles from './HeroBanner.module.scss';
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
  console.log(movieData[0]);
  return (
    <div className={styles.heroBanner}>
      <div className={styles.backdropImg}>
        {movieData.length > 0 && (
          <div className={styles.lazyLoadImageBackground}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData[0].poster_path}`}
              alt={movieData[0].original_title}
            />
          </div>
        )}
      </div>

      <ContentWrapper>
        <div className={styles.heroBannerContent}>
          <h1 className='welcome-text'>Welcome</h1>
          <p className='description'>
            Millions of movies & TV shows to discover. Explore now.
          </p>
          <div className='search-bar'>
            <input type='text' placeholder='Search' />
            <button className='search-button'>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
