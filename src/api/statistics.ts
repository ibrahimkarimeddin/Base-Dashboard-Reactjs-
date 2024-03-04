import useGetQuery from "./helper/useGetQuery";

const API=`/api/admin/home-page/all-statistics`

export const useGetStatistics=(params?:any) => useGetQuery("STATISTICS",API, params);