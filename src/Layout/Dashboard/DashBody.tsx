import { Spinner } from "reactstrap"
import { QueryStatusEnum } from "../../config/QueryStatus"
import LoadingPage from "../app/LoadingPage"
import { useTranslation } from "react-i18next"
import { BsEmojiFrown } from "react-icons/bs";
import ErrorPage from "../app/ErrorPage";


const DashBody = ({ children , status }: { children: React.ReactNode ,status?:QueryStatusEnum }) => {
  const {t} = useTranslation();

  // Add You Custom Loadaing Page
  if(status === QueryStatusEnum.LOADING){

    return <LoadingPage />
  }

  // Add Your Custom Error Page 
  if(status === QueryStatusEnum.ERROR){
    return (
   <ErrorPage/>
    )
  }
  
  return (
    <div className='Page' >
      { children }
    </div>
  )
}

export default DashBody
