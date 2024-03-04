import React, { FC } from "react";
import { Formik, Form } from "formik";
import { Row, Col } from "reactstrap";
import { getInitialValues } from "./formUtil";
import SingleLangEditor from "../../../Extensions/Editor/SingleLangEditor";
import { LoadingButton } from "../../../Components/Ui/LoadingButton";
import { useTranslation } from "react-i18next";
import { useUpdateAboutUs } from "../../../api/app_info";

interface AboutUsFormProps {
  about_us: {
    content_en: string;
    content_ar: string;
  };
}

const AboutUsForm: FC<AboutUsFormProps> = ({ about_us }:any) => {
  const {t} = useTranslation();
  const { mutate: updateInfo, isLoading } = useUpdateAboutUs();

  const handleSubmit = (values: any) => {
    let about = {
      content_en: values.translated_fields["1"].about_us_description,
      content_ar: values.translated_fields["2"].about_us_description,
    };
    updateInfo(about);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={getInitialValues(about_us)}>
      {(formik) => (
        <Form>
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col>
              <SingleLangEditor langCode={1} property="about_us_description" />
              <hr />
            </Col>
            <Col>
              <SingleLangEditor langCode={2} property="about_us_description" />
            </Col>
          </Row>

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

export default AboutUsForm;