
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { BaseURL, BaseURL_IMAGE } from "../../api/config";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteCategory, useUpdateCategoryStatus } from "../../api/category";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();


  const toggleMutation  = useUpdateCategoryStatus()
  const deleteMutation = useDeleteCategory()

  return useMemo(
   
    () => [
      {
        name: t("image"),
        sortable: false,
        center: true,
        cell: (row:any) => { 
          
          return(
          <ColumnsImage  
            src={`${row.category_image}`}

          />
        )},
      },
      {
        name: `${t("name")} (${t("en")})`,
        sortable: false,
        center: true,
        cell: (row:any) =>
          mapTranslatedProperties(row.category_translations, "name", '1'),
      },
      {
        name: `${t("name")} (${t("ar")})`,
        sortable: false,
        center: true,
        cell: (row) =>
          mapTranslatedProperties(row.category_translations, "name", '2'),
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row) => (
          <ToggleStatus object={row} toggleMutation={toggleMutation} />
        ),
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
            objectToEdit={row}
            showView={false}
            onDelete={() => deleteMutation.mutate({ category_id: row.id })}
          />
        ),
      },
    ],
    [t, deleteMutation, toggleMutation]
  );
};

export default useTableColumns;

