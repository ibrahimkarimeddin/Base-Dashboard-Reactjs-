import React from "react";
import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { ChartTypeEnum } from "../../../enums/ChartTypeEnum";
import { history } from "../../../ProviderContainer";
import { useNavigate } from "react-router-dom";

interface StatisticsCardProps {
  className?: string;
  iconLeft?: boolean;
  icon: React.ReactNode;
  count?: string;
  CardTitle?: string;
  CardContent?: string;
  height?: number;
  pathWhenClick :string ;
  
}

const StatisticsCard = (props :StatisticsCardProps) => {

    const navigate = useNavigate()
  const {
    className,
    iconLeft = false ,
    icon,
    count,
    CardTitle,
    CardContent,
    pathWhenClick,
    height,
    ...rest
  } = props;

  return (
    <Card {...rest} onClick={()=>navigate(pathWhenClick , {replace:true})}>
      <CardBody
        className={`${
          className ? className : "stats-card-body"
        } d-flex  justify-content-center flex-column text-center pb-2 pt-2 primary `}
      >
        <div className="icon-section">
          <div
            className={`avatar avatar-stats p-50 m-0 ${ "bg-rgba-primary"}`}
          >
                      <p className="mb-0 text-bold-700">{CardTitle}</p>
            <div className="avatar-content ">{icon}</div>
          </div>
        </div>
        <div className={"title-section " + (iconLeft ? "ml-2" : "")}>
          <h2 className="text-bold-600 mb-25 ">{count}</h2>
          <p className="mb-2 Content">{CardContent}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default StatisticsCard;
