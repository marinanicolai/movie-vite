import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className='hero-banner'>
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
