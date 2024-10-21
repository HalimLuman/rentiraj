import { FaDesktop, FaGamepad, FaHome, FaPhone } from "react-icons/fa";
import { IoWatch } from "react-icons/io5";

export const categories = [
    { 
      value: 'phone',
      label: 'Phone',
      icon: FaPhone,
      subCategories: [
        { value: 'iphone', label: 'iPhone' },
        { value: 'samsung', label: 'Samsung' },
        { value: 'huawei', label: 'Huawei' },
      ] 
    },
    {
      value: 'desktop-tech',
      label: 'Desktop Tech',
      icon: FaDesktop,
      subCategories: [
        { value: 'laptop', label: 'Laptop' },
        { value: 'pc', label: 'PC' },
        { value: 'monitor', label: 'Monitor' },
      ]
    },
    {
      value: 'smart-home',
      label: 'Smart Home',
      icon: FaHome,
      subCategories: [
        { value: 'home-automation', label: 'Home Automation' },
        { value: 'kitchen', label: 'Kitchen' },
        { value: 'bathroom', label: 'Bathroom' },
      ]
    },
    {
      value: 'gaming',
      label: 'Gaming',
      icon: FaGamepad,
      subCategories: [
        { value: 'console', label: 'Console' },
        { value: 'computer', label: 'Computer' },
        { value: 'video-games', label: 'Video Games' },
      ]
    },
    {
      value: 'wearable-tech',
      label: 'Wearable Tech',
      icon: IoWatch,
      subCategories: [
        { value: 'smartwatch', label: 'Smartwatch' },
        { value: 'headphones', label: 'Headphones' },
        { value: 'earphones', label: 'Earphones' },
      ]
    }
  ]