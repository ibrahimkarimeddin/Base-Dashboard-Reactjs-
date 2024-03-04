
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidatedField from '../../Components/ValidatedField/ValidatedField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function FormUsers() {
  const formik = useFormikContext<any>();



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
    {/* name from form utils */}
      <ValidatedField name="name" type="text"label='name'  placeholder='placeholder' />
      
    </Col>
    <Col>

    </Col>

   
  </Row>
  )
}

export default FormUsers


