
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetSocialMedia} from '../../api/socialMedia'
import { QueryStatusEnum } from '../../config/QueryStatus'
import AddSocialMediaModal from './AddSocialMediaModal'
import EditSocialMedia from './EditSocialMedia'

function SocialMediaPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetSocialMedia()
    console.log(data);
    
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'social_media'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
    />
      
    <AddSocialMediaModal />
    <EditSocialMedia/>
    </DashBody>
  )
}

export default SocialMediaPage

