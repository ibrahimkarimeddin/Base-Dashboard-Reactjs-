import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Spinner } from 'reactstrap';
import { useGetStatistics } from '../../api/statistics';
import { useTranslation } from 'react-i18next';
import Chart from "react-apexcharts";
import { DatePicker, Space } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import LoadingSpinner from '../../Components/Ui/LoadingSpinner';
import { getPrimaryColor } from '../../utils/colors/getPrimaryColor';

const YearChart = () => {
  const [datepickerForApi, setDatePickerForAPi] = useState<Date | null>((new Date()));
  const [datepicker, setDatePicker] = useState<Dayjs| null>(dayjs('2023'));

  const { data: statistics, isLoading } = useGetStatistics({ year: datepickerForApi });
  const {t} = useTranslation();

  
  

  const handeYearChange =  (value:any) => {
    if(!value){
      setDatePicker(null)
      setDatePickerForAPi(null)
      return ;
    }
    setDatePicker(value);
    setDatePickerForAPi(value["$y"])
    
  }
  const data = { yearly_visitors_over_months: statistics?.orders_in_year || [] };
  const visits = [...data.yearly_visitors_over_months];
  visits.unshift(0);
  const series = [
    {
      name: t('orders'),
      data: visits.slice(1, 13), // considering months from 1 to 12
    },
  ];

  const options =
   {
    chart: {
      type: 'bar',
      height: 360,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
    },
    fill: {
      opacity: 1,
    },
    colors: [getPrimaryColor()],
  };

  if (isLoading) {
    return (
      <Card style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:360}}>
        <LoadingSpinner />
      </Card>
    );
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <h5 className='primary'> {t('daily_order_per_years')}</h5>
        <Space direction="vertical">
                    <DatePicker onChange={ handeYearChange } picker="year" value={datepicker} />
            </Space>    
        </CardHeader>
        <CardBody>
            
        <Chart
            options={options as any   }
            series={series}
            type={'bar'}
            height={360}
            
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default YearChart;
