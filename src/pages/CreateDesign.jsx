import React, { useState } from 'react';
import ProductSelection from '../components/createDesignPage/ProductSelection';
import ColorSelection from '../components/createDesignPage/ColorSelection';
import TShirtTemplate from '../components/createDesignPage/TShirtTemplate';
import BagTemplate from '../components/createDesignPage/BagTemplate';
import CupTemplate from '../components/createDesignPage/CupTemplate';
import UploadDesignBox from '../components/createDesignPage/UploadDesignBox';
import SelectedProduct from '../components/createDesignPage/SelectedProduct';
import Walkthrough from '../components/createDesignPage/Walkthrough';
import NextStepButton from '../components/createDesignPage/NextStepButton';
import SaveButton from '../components/createDesignPage/SaveButton';



function CreateDesign() {
  const [selectedProduct, setSelectedProduct] = useState('tshirt');

  const renderProductTemplate = () => {
    switch (selectedProduct) {
      case 'bags':
        return <BagTemplate />;
      case 'cups':
        return <CupTemplate />;
      case 'tshirt':
      default:
        return <TShirtTemplate />;
    }
  };

  return (
    <>
      {/* Placeholder for the stepper */}
      <div className="font-semibold text--fs-xl flex justify-center items-center h-16 bg-gray-200 mt-40 mb-7">
        Stepper Placeholder
      </div>

      <div className='step-1 flex justify-center mb-6'>
        <ProductSelection selected={selectedProduct} setSelected={setSelectedProduct} />
      </div>

      <div className='absolute w-full flex justify-center items-center'>
        <div className='w-full px-40 flex justify-between items-start pr-[152px]'>
        <ColorSelection productType={selectedProduct} />
          <div className="flex justify-end items-center gap-4 mt-6">
            <SaveButton />
            <NextStepButton />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-8 px-4 my-10">
        <div className='absolute z-10 mt-25'>
          <UploadDesignBox />
        </div>
        <div className='relative'>
          {renderProductTemplate()}
        </div>
      </div>

      <div className='flex justify-center mt-2'>
        <SelectedProduct />
      </div>

    <Walkthrough />
    </>
  );
}

export default CreateDesign;
