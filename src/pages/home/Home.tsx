import { FC } from 'react';
import TopRating from './toprated/TopRated.tsx';
import Popular from './popular/Popular.tsx';
import Trending from './trending/Trending.tsx';
import HeroBanner from './heroBanner/HeroBanner.tsx';

const Home: FC = () => {
  return (
    <>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRating />
    </>
  );
};

export default Home;
