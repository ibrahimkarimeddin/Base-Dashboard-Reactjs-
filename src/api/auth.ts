import useAddMutation from "./helper/useAddMutation";




const KEY = "AUTH"
const API = {
    LOGIN: `/api/admin/login`,
    LOGOUT: `/api/admin/logout`,
  };
export const useLoginAdmin  =  ()=>useAddMutation(KEY , API.LOGIN)