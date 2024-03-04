
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteSocialMedia, useUpdateSocialMediaStatus } from "../../api/socialMedia";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import { Switch } from "antd";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";
import { useDeleteProduct, useUpdateProductStatus } from "../../api/owner_products";
import { useNavigate } from "react-router-dom";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const toggleMutation = useUpdateProductStatus();
  const deleteMutation = useDeleteProduct();

  const navigate  = useNavigate()
  const handleChange = (row:any)=> {
    const status = row?.is_active == '1' ? false  : true;  

    toggleMutation.mutate({id:row?.id,new_status:status})
      
  }

  return useMemo(
    () => [
 
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.product_main_image} />
          )
        }
      },
      {
        name: `${t("name")} (${t("en")})`,
        sortable: false,
        center: true,
        cell: (row:any) =>
          mapTranslatedProperties(row.product_translations, "name", 1),
      },
      {
        name: `${t("name")} (${t("ar")})`,
        sortable: false,
        center: true,
        cell: (row:any) =>
          mapTranslatedProperties(row.product_translations, "name", 2),
      },
      {
        name: t("price"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          row?.product_price
        ),
      },
      {
        name: t("product_quantity"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          row?.product_quantity
        ),
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          <ToggleStatus object={row} toggleMutation={toggleMutation} />
        ),
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row:any) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=> navigate('/products/'+row.id)}
              objectToEdit={row}
              showEdit={false}
              showView={true}
              onDelete={() => deleteMutation.mutate({ product_id: row.id })}
              />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

