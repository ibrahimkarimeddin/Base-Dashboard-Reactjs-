const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

let FileContiner = `
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidatedField from '../../Components/Karimalden/ValidatedField';
import { FakeSelectData } from '../../Layout/app/Const';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';

function Form${capitalizeFirstLetter(fileName)}() {
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

export default Form${capitalizeFirstLetter(fileName)}


`
fs.writeFileSync('src/Pages/'+fileName+'/Form'+ capitalizeFirstLetter(fileName)+".tsx", 
FileContiner
);

console.log(`File "${fileName}" generated successfully.`);





function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}