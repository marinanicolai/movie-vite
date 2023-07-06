import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

const useFetch = (
  url: string
): { data: any; loading: boolean | string; error: any } => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean | string>('loading...');
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);

    fetchDataFromApi(url, { URLSearchParams })
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch((err: any) => {
        setLoading(false);
        setError('Something went wrong!');
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
