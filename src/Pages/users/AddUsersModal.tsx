

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormUsers from './FormUsers'
import { useAddUsers } from '../../api/users'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'

function AddUsersModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddUsers()
  const handelSubmit = (values:any )=>{

    const dataToSend = getDataToSend(values)

    mutate(dataToSend)
    // Submit Value
  }
  return (
    <LayoutModal
    
     isAddModal={true}
     getInitialValues={getInitialValues()} 
     handleSubmit={handelSubmit} 
     status={status as QueryStatusEnum}
     headerText={t('Add') +t('users')}
     
     getValidationSchema={getValidationSchema()}>

    <FormUsers />
  </LayoutModal>
  )
}

export default AddUsersModal

