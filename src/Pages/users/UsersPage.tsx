
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { useGetUsers} from '../../api/users'
import { QueryStatusEnum } from '../../config/QueryStatus'
import EditUsersModal from './EditUsersModal'
import AddUsersModal from './AddUsersModal'

function UsersPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetUsers()

    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Users'}></DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
      />
      
      <EditUsersModal />
      <AddUsersModal />
      
    </DashBody>
  )
}

export default UsersPage

