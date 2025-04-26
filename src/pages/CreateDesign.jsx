import React from 'react'
import BreadcrumbTop from "../components/mainMenu/BreadcrumbTop";
import ProductSelection from '../components/createDesignPage/ProductSelection';
import ColorSelection from '../components/createDesignPage/ColorSelection';
import Printareas from '../components/createDesignPage/Printareas';


function CreateDesign() {
  return (
    <>
    <div className="mt-25 mb-4 pl-10">
        <BreadcrumbTop  />
    </div>

    <div className="font-semibold flex justify-center items-center h-16 bg-gray-200 mb-7">
        Stepper Placeholder
    </div>

    <div className='flex justify-center'>
        <ProductSelection />
    </div>

    <div className='pl-10'>
        <ColorSelection />
    </div>
    
    <div className='mt-[56px] pl-10'>
        <Printareas />
    </div>
    </>
  )
}

export default CreateDesign