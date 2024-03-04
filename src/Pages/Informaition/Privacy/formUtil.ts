// import { mapTranslatedProperties } from "helpers/language";

export const getInitialValues = (privacy: { locale: string, content: string }[]) => ({
  translated_fields: {
    1: {
      privacy_description: privacy[1].locale == "1" ? (privacy[1]?.content) : (privacy[0]?.content)
    },
    2: {
      privacy_description: privacy[1].locale == "2" ? (privacy[1]?.content) : (privacy[0]?.content)
    },
  },
});