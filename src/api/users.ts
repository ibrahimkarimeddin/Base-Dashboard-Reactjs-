
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/users",
    ADD: "/api/admin/users/create",
    UPDATE: "/api/admin/users/update",
    DELETE: "/api/admin/users/delete",
  };

  const KEY = "USERS";
  export const useGetUsers = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddUsers = () => useAddMutation(KEY, API.ADD);
  export const useUpdateUsers = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteUsers = () =>useDeleteMutation(KEY, API.DELETE);
