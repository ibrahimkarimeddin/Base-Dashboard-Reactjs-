import { boolean } from "yup"



export interface ICategory {
    category_image: any
    category_translations:ICategoryTranslations[] ,
    id: number,
    is_active: boolean
    level: 0
    parent_id: null
}


interface ICategoryTranslations {
    category_id: number
    id: number
    locale:"2" | "1"
    name: string
}