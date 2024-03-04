import useGetQuery from "./helper/useGetQuery";




export const useGetAllHomeStatic =  ()=> useGetQuery('HOME' , 'api/admin/home');