import React from 'react'
import { useGetCategory } from '../../api/category'
import { useTranslation } from 'react-i18next'
import { ICategory } from '../../types/Category'
import { mapTranslatedProperties } from '../language/mapTranslatedProperties'

interface ResponseCategoryOption {
  label:string ,
  value:number 
}

function useCategorySelectOption(){
  const {data} = useGetCategory()

  const  {i18n} =useTranslation()
  console.log(i18n.language)
  if(!data) return []
  return data.map((category:ICategory) => ({
    label:mapTranslatedProperties(category.category_translations , 'name' , i18n.language == 'en' ? '1' : '2'),
    value:category.id
  }))

}

export default useCategorySelectOption
