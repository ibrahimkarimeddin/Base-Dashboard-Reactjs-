// import { mapTranslatedProperties } from "helpers/language";
import { buildFormData } from "../../../api/helper/buildFormData";

interface AboutUs {
  locale: string;
  content: string;
}

interface TranslatedFields {
  [key: number]: {
    about_us_description: string;
  };
}

interface Values {
  translated_fields: TranslatedFields;
  about_us_image: string;
}

export const getInitialValues = (about_us: AboutUs[]): Values => ({
  translated_fields: {
    1: {
      about_us_description: about_us[1].locale == "1" ? about_us[1]?.content : about_us[0]?.content,
    },
    2: {
      about_us_description: about_us[1].locale == "2" ? about_us[1]?.content : about_us[0]?.content,
    },
  },
  about_us_image: "",
});

export const getDataToSend = (values: Values): FormData => {
  const dataToSend:any = {
    translated_fields: {
      1: {
        about_us_description: values.translated_fields[1].about_us_description,
      },
      2: {
        about_us_description: values.translated_fields[2].about_us_description,
      },
    },
  };

  if (values.about_us_image) {
    dataToSend['about_us_image'] = values.about_us_image;
  }

  const formData = new FormData();
  buildFormData(formData, dataToSend);
  return formData;
};