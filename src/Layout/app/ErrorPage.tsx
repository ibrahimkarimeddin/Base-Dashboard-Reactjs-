import React from 'react'
import { useTranslation } from 'react-i18next'
import { BsEmojiFrown } from 'react-icons/bs'

function ErrorPage() {
    const [t]= useTranslation()
  return (
    <div className="error_show">
    <span className="error_icon"><BsEmojiFrown/></span>
    <span className="error_text">
      {t("Ops")}...<br/>
      {t("An Error According")} <br/>
      {t("Please Try Again Later")}
    </span>
  </div>
  )
}

export default ErrorPage