import { Input } from 'antd';
import { SearchProps } from 'antd/es/input'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
const { Search } = Input;

const SearchField = () => {
    const navigate = useNavigate()
    const [searchParams,] = useSearchParams();
    const location   =useLocation()  
    const {t} = useTranslation();
        
    const [searchValue, setSearchValue] = useState(searchParams.get('search')|| "");

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        // console.log(value);

        navigate(`${location?.pathname}?search=${value}`, { replace: true });
    }
    const onChange = (e :any) => {
        setSearchValue(e.target.value);

    }


    return (
        <div className='SearchField'>
            <Search
                allowClear
                enterButton={t("search")}
                size="middle"
                placeholder={t("search")}
                onSearch={onSearch}
                style={{ width: 250 }} 
                value={searchValue}
                onChange={onChange}
                />

        </div>
    )
}

export default SearchField