import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; // importing api token

const headers = {
  Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (setData: any, _endpoint: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3${_endpoint}?api_key=${apiKey}`
    );

    setData(response.data.results);
  } catch (err) {
    console.log(err);
    return err;
  }
};
