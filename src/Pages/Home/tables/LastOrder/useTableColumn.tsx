import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const useTableColumns = () => {
    const {t} = useTranslation();

    const navigate  =  useNavigate()
    return useMemo(
        () => [
          
            {
                name: t("order_code"),
                sortable: false,
                center: true,
                cell:(row:any)=>{
                    console.log(row);
                    
                    return (row?.order_code)
                }

            },

            {
                name: t("order_total"),
                sortable: true,
                center: true,
                cell:(row)=>row["order_total"]
            },
            {
                name: t("order_status"),
                sortable: false,
                center: true,
                cell:(row:any)=><span style={{
                    padding:8, color:'black',borderRadius:10,fontSize:10}}>{t(row.order_status)}</span>
                
            },
            {
                name: "#",
                selector: "action",
                sortable: false,
                center: true,
                cell: (row:any) => (
                    <GrView
                        onClick={() => navigate(`/order/${row?.id}`, {replace:true})}
                        size={22}
                        style={{ cursor: "pointer" }}
                    />
                ),
            },


        ],
        [t]
    );
};

export default useTableColumns;
