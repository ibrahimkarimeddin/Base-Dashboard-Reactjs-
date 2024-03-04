import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

interface API {
  PRIVACY: {
    GET: string;
    UPDATE: string;
  };
 
  ABOUT_US: {
    GET: string;
    UPDATE: string;
  };

}

const API: API = {
  PRIVACY: {
    GET: `/api/admin/app-information/get-privacy`,
    UPDATE: `/api/admin/app-information/update-privacy`,
  },

  ABOUT_US: {
    GET: `/api/admin/app-information/get-aboutus`,
    UPDATE: `/api/admin/app-information/update-aboutus`,
  },

};

const OPTIONS: { 
  refetchOnMount: boolean; 
  refetchOnWindowFocus: boolean; 
} = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

export const useGetPrivacy = () =>
  useGetQuery("PRIVACY", API.PRIVACY.GET,  OPTIONS);
export const useUpdatePrivacy = () =>
  useUpdateMutation("PRIVACY", API.PRIVACY.UPDATE);


export const useGetAboutUs = () =>
  useGetQuery("ABOUT_US", API.ABOUT_US.GET,  OPTIONS);
export const useUpdateAboutUs = () =>
  useUpdateMutation("ABOUT_US", API.ABOUT_US.UPDATE);

