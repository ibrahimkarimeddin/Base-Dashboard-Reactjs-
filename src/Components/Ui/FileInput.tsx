import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';
import { useFormikContext } from 'formik';

type FileInputProps =  {
  name:string,
  label:string,
  accept:string,
  onChange:any
}
function FileInput({name , accept="image/*" ,label , onChange} :FileInputProps) {

  
  return (
    <div className="custom-file-input">
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      {label}
    </label>
    <Input accept={accept} id="inputGroupFile01"  name={name} onChange={onChange}
     type="file" className="custom-file-input" />
  
  </div>
  )
}

export default FileInput