
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidatedField from '../../Components/ValidatedField/ValidatedField';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';

function FormSocialMedia() {
  const formik = useFormikContext<any>();
  const [t] = useTranslation();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    <ValidatedField
          name="translated_fields[1][product_name]"
          label={`${t("product_name")} (${t("en")})`}
          placeholder={`${t("product_name")} (${t("en")})`}
        />
 
          <ValidatedField
          name="translated_fields[1][product_description]"
          label={`${t("product_description")} (${t("en")})`}
          placeholder={`${t("product_description")} (${t("en")})`}
        />
   
      </Col>
      <Col>
      <ValidatedField
          dir="rtl"
          name="translated_fields[2][product_name]"
          label={`${t("product_name")} (${t("ar")})`}
          placeholder={`${t("product_name")} (${t("ar")})`}
        />

      <ValidatedField
          dir="rtl"
          name="translated_fields[2][product_description]"
          label={`${t("product_description")} (${t("ar")})`}
          placeholder={`${t("product_description")} (${t("ar")})`}
        />
        
    </Col>


   
  </Row>
  )
}

export default FormSocialMedia


