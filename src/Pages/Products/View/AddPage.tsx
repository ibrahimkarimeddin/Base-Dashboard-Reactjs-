import React, { useEffect, useState } from 'react'
import { getInitialValues, getValidationSchema, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import { Rate } from 'antd';
import BasicInfo from './BasicInfo';
import { usePageState } from '../../../lib/state mangment/LayoutPagestate';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import { useAddProduct, useGetSingleProduct } from '../../../api/owner_products';
import BasicInfo2 from './BasicInfo2';
import useNavigateOnSuccess from '../../../Hooks/useNavigateOnSuccess';

const AddProductPage = () => {
    

    const {mutate , isLoading , isSuccess} = useAddProduct()
  const [BarStatus, setBarStatus] = useState({ value: 0, isLoading: false, isError: false, isSuccess: false })
  const handleSubmit = (values:any)=>{

    console.log(values);

    const  formToSend = getDataToSend(values)


    mutate(formToSend);
    
  }
  const {t} = useTranslation();

  useNavigateOnSuccess(isSuccess , '/products'  )
  


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit, BarStatus };


  return (
    <div className='ViewPage'>
  
        <ViewPage {...ViewProps}>
          <Tabs>
            <TabList>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo")}</h6></div></Tab>

              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><BsInfoCircle size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo2")}</h6></div></Tab>


            </TabList>
            <TabBody >
              <div className=" mt-4"><BasicInfo /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><BasicInfo2 /></div>
            </TabBody>
    
          </Tabs>
        </ViewPage>
        


    </div>
  )

}

export default AddProductPage