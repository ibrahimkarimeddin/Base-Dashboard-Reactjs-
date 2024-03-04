
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useGetProducts } from '../../api/owner_products'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'

function ProductsPage() {

    const column   =useTableColumns()
    const {data  ,status } = useGetProducts("")
    console.log(data);
    const [t] = useTranslation()
    const navigate = useNavigate()
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'products'}>
        <AddButton  onClick={()=>navigate('/products/add')}></AddButton>
      </DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
    />
      
    </DashBody>
  )
}

export default ProductsPage

