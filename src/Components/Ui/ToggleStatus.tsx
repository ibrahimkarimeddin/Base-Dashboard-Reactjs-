import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import StatusBadge from "./StatusBadge";
import { useTranslation } from "react-i18next";

interface ToggleStatusProps {

}
export const ToggleStatus = ({ object, toggleMutation, ...props }:any) => {
  const [t] = useTranslation();

  const handleSwitch = () => {
    toggleMutation.mutate({
      id: object.id,
      new_status: !object.is_active,
    });
  };

  return (
    <>
      <div className="p-0">
        <p
          className="mb-0 p-0"
          style={{ whiteSpace: "nowrap", textAlign: "center" }}
        >
          {object.is_active ? t("active") : t("inactive")}
        </p>
        <Toggle
          {...props}
          className="custom-switch"
          disabled={toggleMutation.isLoading}
          onChange={handleSwitch}
          checked={object.is_active}
        />
      </div>
    </>
  );
};
