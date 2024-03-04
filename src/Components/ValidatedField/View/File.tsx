import { Button, Upload, UploadFile } from 'antd'
import useFormField from '../../../Hooks/useFormField';
import { UploadOutlined } from '@ant-design/icons';
import { BaseURL, BaseURL_IMAGE } from '../../../api/config';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from 'formik';


const File = ({ name, label, onChange, isDisabled, props }: any) => {
  const { formik, t } = useFormField(name, props)
  const imageUrl = formik.values[name] ? BaseURL_IMAGE + formik.values[name] :  '';

  const fileList: UploadFile[] = [

    {
      uid: '-1',
      name: '',
      status: 'done',
      url: imageUrl,
      thumbUrl: imageUrl,
    }
  ];
  const FilehandleChange = (value:any) => {
    
    formik.setFieldValue(name, value.file.originFileObj)

  };
  const customRequest = async ({ onSuccess}: any) => {
    onSuccess();
  };
  return (
    <div className="ValidatedField">
      <label htmlFor={name} className="text">
        {t(`${label || name}`)}
      </label>

      <Upload
        disabled={isDisabled}
        listType="picture"
        maxCount={1}
        className='w-100'
        defaultFileList={[...fileList]}
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}

      >
        <Button className='w-100' icon={<UploadOutlined  />}>{t("upload_image")}</Button>
        <ErrorMessage name={name}>{msg => <div className='error'>{t(msg)}</div>}</ErrorMessage>

      </Upload>



    </div>
  )
}

export default File