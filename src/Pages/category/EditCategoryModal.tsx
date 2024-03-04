
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormCategory from './FormCategory'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useUpdateCategory } from '../../api/category'
import { QueryStatusEnum } from '../../config/QueryStatus'

function EditCategoryModal() {
  const {objectToEdit} = usePageState()
  
  const {mutate , status} = useUpdateCategory()
  const handelSubmit = (values:any )=>{
    values['category_id']=  objectToEdit.id
    const dataToSend = getDataToSend(values)

    mutate(dataToSend)
    // Submit Value
  }
  return (
    <LayoutModal 
    status={status as QueryStatusEnum}
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={handelSubmit}
     headerText='edit' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormCategory />
    </LayoutModal>
  )
}

export default EditCategoryModal
