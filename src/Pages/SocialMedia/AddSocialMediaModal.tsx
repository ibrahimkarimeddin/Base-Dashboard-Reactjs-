

import React from 'react'
import LayoutModal from '../../Layout/Dashboard/LayoutModal'
import FormSocialMedia from './FormSocialMedia'
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtil'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'
import { useAddSocialMedia } from '../../api/socialMedia'

function AddSocialMediaModal() {


  const [t] = useTranslation()
  const {mutate , status} = useAddSocialMedia()
  const handelSubmit = (values:any )=>{
    values['is_active'] = values['is_active'] ==1 ?true :false
    // delete values['id']
    console.log(values);
    
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
     headerText={t('Add') +t('social_media')}

     getValidationSchema={getValidationSchema()}>

    <FormSocialMedia />
  </LayoutModal>
  )
}

export default AddSocialMediaModal

