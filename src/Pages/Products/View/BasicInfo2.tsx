import React from 'react'
import { Col, Row } from 'reactstrap'
import ValidatedField from '../../../Components/ValidatedField/ValidatedField'
import { useTranslation } from 'react-i18next';
import { useGetCategory } from '../../../api/category';
import useCategorySelectOption from '../../../utils/SelectOptions/useCategorySelectOption';

const BasicInfo2 = () => {
  const [t] = useTranslation();

  const categoryOption = useCategorySelectOption()



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidatedField name="product_main_image" type="File" label='image' placeholder='image' />

        <ValidatedField
          type='Select'
          option={categoryOption}
          name="category_id"
          label={`${t("category")}`}
          placeholder={`${t("category")}`}
        />



        {/* <ValidatedField
          name="is_cheapest"
          label={t("is_cheapest")}
          placeholder={t("is_cheapest")}
          type="Checkbox"

        /> */}
        <ValidatedField
          name="is_most_purchase"
          label={t("is_most_purchase")}
          placeholder={t("is_most_purchase")}
          type="Checkbox"

        />

      </Col>
      <Col>
        <ValidatedField
          name="product_price"
          label={t("price")}
          placeholder={t("price")}
          type="number"

        />
        <ValidatedField
          name="product_quantity"
          label={t("product_quantity")}
          placeholder={t("product_quantity")}
          type="number"

        />
{/* 
        <ValidatedField
          name="is_latest"
          label={t("is_latest")}
          placeholder={t("is_latest")}
          type="Checkbox"

        />
 */}





        <ValidatedField
          name="is_highlight"
          label={t("is_highlight")}
          placeholder={t("is_highlight")}
          type="Checkbox"

        />
      </Col>


    </Row>
  )
}

export default BasicInfo2