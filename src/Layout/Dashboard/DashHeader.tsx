import React from "react";
import AddButtonLayout from "./AddButton/AddButtonLayout";
import { useTranslation } from "react-i18next";

interface DashHeaderProp {
  title: string;
  children?: React.ReactNode;
  showAddButton?: boolean;
  haveAddModal?:boolean
}
const DashHeader = ({
  children,
  title,
  haveAddModal= true ,
  showAddButton = true,
}: DashHeaderProp) => {
  const [t] = useTranslation();
  return (
    <div className="Page_Header">
      <h3>{t(`${title}`)}</h3>
      {children}
      {showAddButton && <AddButtonLayout  haveAddModal={haveAddModal}/>}
    </div>
  );
};

export default DashHeader;
