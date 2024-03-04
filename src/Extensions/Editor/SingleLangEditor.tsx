import React, { FC } from "react";
import PropTypes from "prop-types";
import { HtmlEditor } from "./HtmlEditor";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

interface SingleLangEditorProps {
  langCode: number;
  property: string;
}

const PROPERTY_TYPES: string[] = [
  "privacy_description",
  "conditions_description",
  "about_us_description",
  "product_description",
  "auction_description"
];

const SingleLangEditor: FC<SingleLangEditorProps> = ({ langCode, property }) => {
  const formik:any = useFormikContext();
  const {t} = useTranslation();

  const label = `${t(property)} (${t(`lang_${langCode}`)})`;
  const fieldName = `translated_fields[${langCode}][${property}]`;
  return (
    <>
      <h5 className="Information_title">{label}</h5>
      <HtmlEditor
        langCode={langCode}
        name={fieldName}
        editorState={formik.values.translated_fields[langCode][property]}
      />
    </>
  );
};

SingleLangEditor.propTypes = {
  langCode: PropTypes.oneOf([1, 2]).isRequired,
  property: PropTypes.oneOf(PROPERTY_TYPES).isRequired,
};

export default SingleLangEditor;