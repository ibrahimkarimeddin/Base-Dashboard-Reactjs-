import React, { FC } from "react";
import StatusCard  from "../../Extensions/Editor/StatusCard";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { useTranslation } from "react-i18next";

interface PageStructureProps {
  title?: string;
  isLoading: boolean;
  isError: boolean;
  data?: any;
  children:any
}

const PageStructure: FC<PageStructureProps> = ({
  title,
  isLoading,
  isError,
  data,
  children,
}) => {
  const {t} = useTranslation();

  if (!data) return <StatusCard isLoading={isLoading} isError={isError} />;
  return (
    <Card className="Information_title">
      {title && (
        <CardHeader>
          <CardTitle>{t(title)}</CardTitle>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default PageStructure;