import React from 'react';
import tshirtTemplate from "../../assets/images/create-design-pages/selection-t-shirt.svg";

function TShirtTemplate() {
  return (

    <div className='flex items-center pl-50'>
      <img src={tshirtTemplate} alt="T-shirt template" className='w-[607.31px] h-[480px]' />
    </div>
  );
}

export default TShirtTemplate;