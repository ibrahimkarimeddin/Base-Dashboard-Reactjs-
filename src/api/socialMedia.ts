import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
    ADD: `/api/admin/socialmedia/add`,
    GET_ALL: `/api/admin/socialmedia/getAll`,
    UPDATE_STATUS: `/api/admin/socialmedia/update_status`,
    UPDATE_DETAILS: `/api/admin/socialmedia/update`,
    DELETE: `/api/admin/socialmedia/delete`,
}
const KEY = 'SOCIAL_MEDIA'
export const useAddSocialMedia = () => useAddMutation(KEY, API.ADD);
export const useGetSocialMedia = () => useGetQuery(KEY, API.GET_ALL);
export const useUpdateSocialMedia = () => useUpdateMutation(KEY, API.UPDATE_DETAILS);
export const useUpdateSocialMediaStatus = () => useToggleStatus(KEY, API.UPDATE_STATUS, 'social_media_id');
export const useDeleteSocialMedia = () => useDeleteMutation(KEY, API.DELETE, 'social_media_id');