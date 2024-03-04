
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  password:string,
  email:string 
}


interface InitialValues extends formUtilCommon {

}
interface ValidateSchema  extends formUtilCommon{

}

export const getInitialValues = (): InitialValues => {
 

  return {
    password: "",
    email:""
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    email:Yup.string().required("required"),
    password:Yup.string().required("required"),

  });
};