import React from 'react'
import ProductSelection from '../components/createDesignPage/ProductSelection';
import ColorSelection from '../components/createDesignPage/ColorSelection';
import TShirtTemplate from '../components/createDesignPage/TShirtTemplate';
import CreateDesignButton from '../components/createDesignPage/CreateDesignButton';
import UploadDesignBox from '../components/createDesignPage/UploadDesignBox';
import SelectedProduct from '../components/createDesignPage/SelectedProduct';
import Test from "../components/createDesignPage/Test";
import Test2 from "../components/createDesignPage/Test2";
import Walkthrough from '../components/createDesignPage/Walkthrough';



function CreateDesign() {

  return (
    <>
    <div className="font-semibold flex justify-center items-center h-16 bg-gray-200 mb-7">
        Stepper Placeholder
    </div>

    <div className='step-1 flex justify-center mt-20 mb-20'>
        <ProductSelection />
    </div>

    <div className='step-2 justify-center mx-283 mt-25 absolute'>
        <UploadDesignBox />
    </div>

    <div className='px-40 flex justify-between items-start'>
        <ColorSelection />
        <TShirtTemplate />
        <button onClick={() => console.log("Upload clicked")} className='flex items-center gap-2 p-2 rounded-md'>
            <CreateDesignButton />
        </button>
    </div>

    <div className='flex justify-center mt-2'>
        <SelectedProduct />
    </div>
    {/* <section>
        <Test />
        <Test2 />
    </section> */}


    <Walkthrough />
    </>
  )
}

export default CreateDesign;