import React from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";


interface RowData {
   name:string ,
   phone:string ,
   email:string ,
   id:number 
}

const useTableColumns = () => {
    const navigate = useNavigate()
    const {t} = useTranslation();

    return useMemo(() => {
        const columns = [
            {
                name: t("full_name"),
                sortable: false,
                center: true,
                cell: (row: RowData) => row?.name,
            },
            {
                name: t("email"),
                sortable: false,
                center: true,
                cell: (row: RowData) => row?.email,
            },
            {
                name: t("phone"),
                sortable: false,
                center: true,
                cell: (row: RowData) => row?.phone,
            },
            //          {
            //     name: "#",
            //     selector: "action",
            //     sortable: false,
            //     center: true,
            //     cell: (row: RowData) => (
            //         <GrView
            //             onClick={() => navigate(`/user/${row?.id}`, {replace:true})}
            //             size={22}
            //             style={{ cursor: "pointer" }}
            //         />
            //     ),
            // },
        ];

        return columns;
    }, [t]);
};

export default useTableColumns;
