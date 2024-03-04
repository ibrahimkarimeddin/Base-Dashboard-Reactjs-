
import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormUsers from './FormUsers'
import { getInitialValues, getValidationSchema } from './formUtil'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'

function EditUsersModal() {
  const {objectToEdit} = usePageState()
  return (
    <LayoutModal 
     isAddModal={false}
     getInitialValues={getInitialValues(objectToEdit)} 
     handleSubmit={() => { }}
     headerText='Edit Modal' 
     getValidationSchema={getValidationSchema(objectToEdit)}>
      <FormUsers />
    </LayoutModal>
  )
}

export default EditUsersModal
