import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";


const API = {
  PRIVACY: {
    GET: `/api/admin/app-information/get-privacy`,
    UPDATE: `/api/admin/app-information/update-privacy`,
  },
  CONDITIONS: {
    GET: `/api/admin/conditions`,
    UPDATE: `/api/admin/conditions/update`,
  },
  ABOUT_US: {
    GET: `/api/admin/app-information/get-aboutus`,
    UPDATE: `/api/admin/app-information/update-aboutus`,
  },
  COMPANY_INFO: {
    GET: `/api/admin/company_info`,
    UPDATE: `/api/admin/company_info/update`,
  },
};

const OPTIONS = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

export const useGetPrivacy = () =>
  useGetQuery("PRIVACY", API.PRIVACY.GET, null, OPTIONS);
export const useUpdatePrivacy = () =>
  useUpdateMutation("PRIVACY", API.PRIVACY.UPDATE);

export const useGetConditions = () =>
  useGetQuery("CONDITIONS", API.CONDITIONS.GET, null, OPTIONS);
export const useUpdateConditions = () =>
  useUpdateMutation("CONDITIONS", API.CONDITIONS.UPDATE);

export const useGetAboutUs = () =>
  useGetQuery("ABOUT_US", API.ABOUT_US.GET, null, OPTIONS);
export const useUpdateAboutUs = () =>
  useUpdateMutation("ABOUT_US", API.ABOUT_US.UPDATE);

export const useGetCompanyInfo = () =>
  useGetQuery("COMPANY_INFO", API.COMPANY_INFO.GET, null, OPTIONS);
export const useUpdateCompanyInfo = () =>
  useUpdateMutation("COMPANY_INFO", API.COMPANY_INFO.UPDATE);
