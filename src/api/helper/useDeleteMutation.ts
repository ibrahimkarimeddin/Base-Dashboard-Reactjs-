import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';
import useAxios from './useAxios';
import { useTranslation } from 'react-i18next';

type AxiosResponse = {
  message: string;
  // Add other properties as needed
};

function useDeleteMutation(key:any , url: string, object_id?:any): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {t} = useTranslation();

  return useMutation<AxiosResponse, unknown, any, unknown>(
    async (dataToSend:any) => {

      const { data } = await axios.post(url ,{
        // [object_id]:id,
       ... dataToSend,
      });
      return {...data,dataToSend};
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(key);
        toast.success(t('deleted_successfully'));
      },
      onError: (error:any) => {
        const message = error?.response?.data?.message || t("failed_to_delete_data");
        toast.error(message);
      }
    }
  );
}

export default useDeleteMutation;
