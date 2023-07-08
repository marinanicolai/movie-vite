import { FC } from 'react';
import TopRating from './toprated/TopRated.tsx';
import Popular from './popular/Popular.tsx';
import Trending from './trending/Trending.tsx';

const Home: FC = () => {
  return (
    <>
      <Trending />
      <Popular />
      <TopRating />
    </>
  );
};

export default Home;
