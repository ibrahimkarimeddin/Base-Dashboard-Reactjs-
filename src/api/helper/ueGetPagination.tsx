import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useLocation } from 'react-router-dom';

export default function useGetQueryPagination(KEY:string  , Api: string , params:any={},options:any={}) {
  const axios = useAxios();
  const location = useLocation();
  const pagination = location?.search || '';

  return useQuery(
    [KEY, pagination], async () => {
    const response = await axios.get(Api + pagination , {params});
    return response.data.data; 
  },
  {
    ...options
  }
  // {
  //   onError: (error) => {
  //     console.error('An error occurred:', error);
  //   },
  //   refetchOnWindowFocus: false,
  // }
  );
}

// export const useGetDynamic = (Api: string) => useGetQueryPagination(Api);
