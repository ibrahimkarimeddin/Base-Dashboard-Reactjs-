import React, { FC } from "react";
import { Formik, Form, FormikValues } from "formik";
import { LoadingButton } from "../../../Components/Ui/LoadingButton";
import { getInitialValues } from "./formUtil";

import SingleLangEditor from "../../../Extensions/Editor/SingleLangEditor";
import { useTranslation } from "react-i18next";
import { useUpdatePrivacy } from "../../../api/app_info";

interface PrivacyFormProps {
  privacy: {
    content_en: string;
    content_ar: string;
  };
}
const PrivacyForm: FC<PrivacyFormProps> = ({ privacy }:any) => {
  const {t} = useTranslation();
  const { mutate: updateInfo, isLoading } = useUpdatePrivacy();

  const handel = (values: FormikValues) => {
    let about = {
      content_en: values.translated_fields["1"].privacy_description,
      content_ar: values.translated_fields["2"].privacy_description,
    };
    updateInfo(about);
  };

  return (
    <Formik onSubmit={handel} initialValues={getInitialValues(privacy)}>
      {(formik) => (
        <Form>
          <SingleLangEditor langCode={1} property="privacy_description" />
          <hr />
          <SingleLangEditor langCode={2} property="privacy_description" />
          <hr />
            <div className="w-100 d-flex align-items-center justify-content-center">
              <LoadingButton
                color="primary"
                type="submit"
                isLoading={isLoading}
              >
                {t("save")}
              </LoadingButton>
            </div>
        </Form>
      )}
    </Formik>
  );
};

export default PrivacyForm;