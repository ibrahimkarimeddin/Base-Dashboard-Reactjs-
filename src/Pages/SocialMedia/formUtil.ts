
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  social_media_link:any
  social_media_image:any,
}

interface ObjectToEdit extends formUtilCommon {
    id?:number,
    is_active:boolean,
      
}

export interface InitialValues extends ObjectToEdit {
    id?:number,
    is_active:boolean,
    
}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 
  // console.log(objectToEdit);
  
  return {
    id:objectToEdit?.id?? 0 ,
    social_media_link:objectToEdit?.social_media_link?? "",
    social_media_image:objectToEdit?.social_media_image?? "",
    is_active:objectToEdit?.is_active?? true,
  }
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    social_media_link:Yup.mixed().required('required'),
    social_media_image:Yup.mixed().required("required"),
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  // console.log(data);

  if(typeof data['social_media_image'] == 'string') delete data['social_media_image']
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

