import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { Formik, Form } from "formik";
import { LoadingButton } from "../../Components/Ui/LoadingButton";
import ProgressBar from "../../Components/Ui/ProgressBar";
import { useNavigate } from "react-router-dom";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";
import { useTranslation } from "react-i18next";

type TViewPage ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   handleSubmit:any,
   BarStatus:any,
   showProgressBar?:boolean,
}

const ViewPage: React.FC<TViewPage>=  ({children,getInitialValues, getValidationSchema,handleSubmit,BarStatus,showProgressBar = true})=> {
    
    const {objectToEdit} = usePageState()
    const {t} = useTranslation();
    const navigate = useNavigate();
  // console.log(BarStatus);

  return (
    <Card className="ViewTapPage">
      <CardHeader  className="CardHeader" >
        <CardTitle className="View_information">
          {t("View_information")}
        </CardTitle>
       <Button onClick={() => {    navigate(-1);}}>  {t("back")}  </Button>
      </CardHeader>
      <CardBody>
        {
           <Formik
           onSubmit={handleSubmit}
           initialValues={getInitialValues(objectToEdit)}
           validationSchema={getValidationSchema()}
        >
          {(formik) => (
            <Form>
              {/* <HeadTabs tabs={tabs} /> */}
                {children}
                {showProgressBar && 
                  <>
                    <ProgressBar
                    value={BarStatus?.value}
                    isLoading={BarStatus?.isLoading}
                    isError={BarStatus?.isError}
                    isSuccess={BarStatus?.isSuccess}
                    />
                    <div className="d-flex mt-4 justify-content-center align-items-center">
                      <LoadingButton
                        type="submit"
                        color="primary"
                        isLoading={BarStatus?.isLoading}
                      >
                        {t("save")}  
                      </LoadingButton>
                    </div>
                  </>
                }
            </Form>
          )}
        </Formik>
        }
       
      </CardBody>
    </Card>
  );
};


export default ViewPage;
