import React from 'react'
import shirtblack from "../../assets/images/Products/t-shirt/prove-them/prove-them-front-black.png";
import shirtwhite from "../../assets/images/Products/t-shirt/prove-them/prove-them-front-white.png";
import shirtblue from "../../assets/images/Products/t-shirt/prove-them/prove-them-front-blue.png";
import shirtgray from "../../assets/images/Products/t-shirt/prove-them/prove-them-front-gray.png";

function SelectedProduct() {
  return (
    <div className='flex flex-col items-center justify-center w-[1344px] h-[400px]'>
     <h2 className='font-semibold text-2xl mb-4'>
      Selected Products
     </h2>
      <div className='flex gap-12'>
          <img src={shirtblack} alt="Black T-shirt" className='w-[280px] h-[280px]' />
          <img src={shirtwhite} alt="White T-shirt" className='w-[280px] h-[280px]' />
          <img src={shirtblue} alt="Blue T-shirt" className='w-[280px] h-[280px]' />
          <img src={shirtgray} alt="Gray T-shirt" className='w-[280px] h-[280px]' />
        </div>
     </div>
  )
}

export default SelectedProduct