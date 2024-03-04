
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/admin/category/getAll",
    ADD: "/api/admin/category/add",
    UPDATE: "/api/admin/category/update",
    DELETE: "/api/admin/category/delete",
    UPDATE_STATUS: `/api/admin/category/update_category_status`,

  };

  const KEY = "CATEGORY";
  export const useGetCategory = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddCategory = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteCategory = () =>useDeleteMutation(KEY, API.DELETE);
  export const useUpdateCategoryStatus = () =>
  useToggleStatus(KEY, API.UPDATE_STATUS, "category_id");