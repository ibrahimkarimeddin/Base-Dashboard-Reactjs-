
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";

interface formUtilCommon {
  
 
}

interface ObjectToEdit extends formUtilCommon {

    id?:number,
    category_translations:any,
    category_image?:any

}

interface InitialValues  {
  translated_fields:{
    1:{
      category_name :string 
    },
    2:{
      category_name :string 
    }
  },
  category_image:any
}
interface ValidateSchema  extends formUtilCommon{
  translated_fields:{
    1:{
      category_name :string 
    },
    2:{
      category_name :string 
    }
  },

  category_image?:any

}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 
  
  return {
    translated_fields: {
      1: {
        category_name:
          mapTranslatedProperties(
            objectToEdit?.category_translations,
            "name",
            '1'
          ) || "",
      },
      2: {
        category_name:
          mapTranslatedProperties(
            objectToEdit?.category_translations,
            "name",
            '2'
          ) || "",
      },
    },
    category_image: objectToEdit?.category_image,
    
  };
  


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
    // validate input  
 return Yup.object().shape({
    // translated_fields: Yup.object({
    //   1: Yup.object({
    //     category_name: Yup.string(),
    //   }),
    //   2: Yup.object({
    //     category_name: Yup.string(),
    //   }),
    // }),

    // ...(!editMode && {
    //   category_image: Yup.mixed(),
    // }),
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  data['en_name'] = data["translated_fields"]["1"]["category_name"]
  data['ar_name'] = data["translated_fields"]["2"]["category_name"]
  data['is_active'] = 1 

  
  if(typeof  values['category_image'] == "string"){
    delete data['category_image']
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

