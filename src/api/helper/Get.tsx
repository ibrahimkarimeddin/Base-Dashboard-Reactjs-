import { useQuery } from 'react-query';
import useAxios from './useAxios';

function useGetQuery(key: string, url: string , params:any) {
  const axios = useAxios();

  return useQuery(key, async () => {
    const response = await axios.get( params ? url+params:  url , params);
    return response.data.data; 
  }, {
    onError: (error) => {
      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
  });
}

export default useGetQuery;
