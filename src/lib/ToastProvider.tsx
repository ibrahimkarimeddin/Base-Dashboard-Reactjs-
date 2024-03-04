import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ToastProvider({ children }: any) {
  let What_the_language = localStorage.getItem('language')  ?? "en";
  console.log(What_the_language);
  
  return (
    <>
     <ToastContainer 
     position={What_the_language === "en" ?  "top-right" : "top-left"}
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={true}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    style={{zIndex:"9999999999999999999"}}
     />
    {children}
    </>
  )
}

export default ToastProvider