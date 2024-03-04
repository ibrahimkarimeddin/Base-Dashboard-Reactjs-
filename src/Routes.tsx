import { ReactNode, lazy } from "react";

// Icons Import 

import { AiFillQuestionCircle} from "react-icons/ai"
import {FaHome, FaProductHunt, FaBorderAll, FaAdversal } from "react-icons/fa"
import { MdOutlineCategory, MdPrivacyTip, MdProductionQuantityLimits } from "react-icons/md";
import { FiMail } from "react-icons/fi";

import {BsInfoCircle} from "react-icons/bs"

import { FaMessage } from "react-icons/fa6";
import { TfiLayoutSlider } from "react-icons/tfi";

// Pages Import

import HomePage from "./Pages/Home/HomePage";
import PrivacyPage from "./Pages/Informaition/Privacy/PrivacyPage";
import AboutUsPage from "./Pages/Informaition/AboutUs/AboutUsPage";
import SocialMediaPage from "./Pages/SocialMedia/SocialMediaPage";
import CategoryPage from "./Pages/category/CategoryPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import ViewProduct from "./Pages/Products/View/Page";
import AddProductPage from "./Pages/Products/View/AddPage";


interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    // Hidden the route from the navigation sidebar
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [

    {
        name: "Home",
        element: <HomePage />,
        icon: <FaHome />,
        href: "/",
    },
    {
        name: "category",
        
        icon: <MdOutlineCategory  size={20} />,
        href: "/category",
        element: <CategoryPage/>,
    },
    {
        name: "Products", 
        icon: <MdProductionQuantityLimits  size={20} />,
        href: "/products",
        element: <ProductsPage/>,
    },
  
   
    
  
    {
        name: "social_media",
        
        icon: <FiMail size={20} />,
        href: "/SocialMedia",
        element: <SocialMediaPage/>,
    },
    
    {
        name: "information",
        icon: <BsInfoCircle size={20} />,
        element: <></>,
        children :[
        {
        name: "privacy",
        icon: <MdPrivacyTip size={20} />,
        href: "/Information/privacy",
        element: <PrivacyPage/>
        },
        {
        name: "about_us",
        icon: <AiFillQuestionCircle size={20} />,
        href: "/Information/AboutUs",
        element: <AboutUsPage />
        },
      ],


      
    },
          // hidden 

   
     {
        name: "ViewProduct",
        icon: <FaProductHunt size={20} />,
        href: "/products/:id",
        element: <ViewProduct/>,
        hidden : true,
    },
    {
        name: "addProduct",
        icon: <FaProductHunt size={20} />,
        href: "/products/add",
        element: <AddProductPage/>,
        hidden : true,
    },
]