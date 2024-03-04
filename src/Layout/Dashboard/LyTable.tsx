
import DataTable from 'react-data-table-component';
import { Card, CardBody, Spinner } from 'reactstrap';
import { PaginationBody } from '../../Hooks/usePagination';
import { useTranslation } from 'react-i18next';

const LyTable = (props?: any) => {
    const {t} = useTranslation();

  
  return (
    <div className='LayoutBody'>
      <Card>
        <CardBody>
          <DataTable
            columns={props?.column}
            data={props?.data}
            progressPending={props?.isLoading}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
            progressComponent={<Spinner />}
             
            {...(props.is_pagination && {
              paginationServer: true,
              paginationComponent: () => <PaginationBody data={props?.total} />
            })}

            {...props}
          />

        </CardBody>
      </Card>
    </div>

  )
}


export default LyTable