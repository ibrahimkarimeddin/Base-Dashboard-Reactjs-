import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import useAxios from "./useAxios";

export const useToggleStatus = (key:any, url:any, object_id:any) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [t] = useTranslation();

  return useMutation(
    async ({ id, new_status }:any) => {
      const { data } = await axios.post(url, {
        [object_id]: id,
        new_status,
      });
      return { ...data, id, new_status };
    },
    {
      onSuccess: ({ message, id, new_status }) => {
        toast.success(message || t("toggle_success"));

        queryClient.invalidateQueries([key]);
      },
      onError: (err:any) => {
        const message = err?.response?.data?.message || t("toggle_failed");
        toast.error(message);
      },
    }
  );
};
