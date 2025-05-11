import React from 'react';

// Import all mockup images
import shirtblack from "../../assets/images/Products/shirt/empty/empty-shirt-black-front.png";
import shirtwhite from "../../assets/images/Products/shirt/empty/empty-shirt-white-front.png";
import shirtblue from "../../assets/images/Products/shirt/empty/empty-shirt-blue-front.png";
import shirtgray from "../../assets/images/Products/shirt/empty/empty-shirt-gray-front.png";

import bagblack from "../../assets/images/Products/bag/empty/empty-bag-black-front.png";
import bagwhite from "../../assets/images/Products/bag/empty/empty-bag-white-front.png";
import bagblue from "../../assets/images/Products/bag/empty/empty-bag-blue-front.png";
import baggray from "../../assets/images/Products/bag/empty/empty-bag-gray-front.png";

import cupblack from "../../assets/images/Products/cup/empty/empty-cup-black-front.png";
import cupwhite from "../../assets/images/Products/cup/empty/empty-cup-white-front.png";
import cupblue from "../../assets/images/Products/cup/empty/empty-cup-blue-front.png";
import cupgray from "../../assets/images/Products/cup/empty/empty-cup-gray-front.png";

const productMockups = {
  tshirt: [
    { color: 'black', src: shirtblack },
    { color: 'white', src: shirtwhite },
    { color: 'blue', src: shirtblue },
    { color: 'gray', src: shirtgray },
  ],
  bags: [
    { color: 'black', src: bagblack },
    { color: 'white', src: bagwhite },
    { color: 'blue', src: bagblue },
    { color: 'gray', src: baggray },
  ],
  cups: [
    { color: 'black', src: cupblack },
    { color: 'white', src: cupwhite },
    { color: 'blue', src: cupblue },
    { color: 'gray', src: cupgray },
  ],
};

const printAreas = {
  tshirt: { top: '32%', left: '20%', width: '60%', height: '40%' },
  bags: { top: '50%', left: '23%', width: '50%', height: '30%' },
  cups: { top: '40%', left: '30%', width: '40%', height: '30%', transform: 'rotate(-25deg)' },
};

function SelectedProduct({ selectedProduct, selectedColors, uploadedImage }) {
  const allMockups = productMockups[selectedProduct] || [];

  const mockups = allMockups.filter((mockup) =>
    selectedColors.includes(mockup.color.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center justify-center w-[1344px] mt-8'>
      <h2 className='font-semibold text-xl capitalize'>
        {selectedProduct} Preview
      </h2>
      <div className='flex gap-12 flex-wrap justify-center'>
        {mockups.map(({ color, src }, i) => (
          <div key={i} className='relative w-[280px] h-[280px]'>
            <img src={src} alt={`${color} ${selectedProduct}`} className='w-full h-full object-contain' />
            {uploadedImage && (
             <img
              src={uploadedImage}
              alt='Design Overlay'
              className='absolute object-contain pointer-events-none'
              style={{
              zIndex: 5,
               ...printAreas[selectedProduct] // <- apply positioning and size
              }}
              />
              )}
          </div>
        ))}
        {mockups.length === 0 && (
          <p className="text-gray-500 italic mt-4">Please select at least one color</p>
        )}
      </div>
    </div>
  );
}

export default SelectedProduct;
