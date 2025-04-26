import React from 'react'
import arrowright from "../../assets/images/create-design-pages/arrow-right.svg";

function CreateDesignButton() {
  return (
    <div className='flex gap-[16px]'>
        <button className='w-[120px] h-[48px] bg-primary-blue-500 text-white font-medium font-medium py-2 px-4 rounded-[8px] cursor-pointer relative'>
            Save
        </button>
        <button className='w-[256px] h-[48px] bg-primary-black text-white font-medium font-medium py-2 px-4 rounded-[8px] relative flex items-center justify-center cursor-pointer'>
            Next Step
            <img src={arrowright} alt="Arrow right"  className='ml-4'/>
        </button>
    </div>
  )
}

export default CreateDesignButton