import React from 'react'
import CheckoutAddress from '../../components/CheckoutAddress'

const CheckoutSummary = () => {
  return (
    <>
    <div id ="summary" className="flex flex-col w-[1072px] gap-2 items-center">

            <div id ="shippingInformation" className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secoundary-light-gray-500">
              <CheckoutAddress name='Somchai Kitkardee' address='62/1 Soi Ekkachai 116, Bang Bon Nuea, Bang Bon, 10150, Bangkok, Thailand' tel='080-236-6966'/>
              <button classNameName="text-lg font-[500] items-center inline-flex hover:cursor-pointer hover:outline-gray-400 hover:outline-1 hover:scale-100 duration-300 h-fit p-4">Edit</button>
            </div>

            <div id ="shippingInformation" className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secoundary-light-gray-500">
              <div id="shipping" className="w-[504px] h-auto">
                <p className="mb-6 text-[20px] text-[#A1A1AA] font-[600]">Shipping Method</p>

              </div>
              <button className="font-[500] items-center inline-flex hover:cursor-pointer hover:outline-gray-400 hover:outline-1 hover:scale-100 duration-300 h-fit p-4">Edit</button>
            </div>

            <div id ="paymentMethod" className=" border-[1.25px] border-secoundary-light-gray-500 p-6 w-full h-auto">
                <p className="inline-flex mb-6 text-[20px] text-[#A1A1AA] font-[600]">Payment Methods</p>
                <div className="w-[18rem] h-auto flex justify-between items-center gap-10">
                  <div className="w-auto h-auto border">
                    <span className="text-[#202020] font-[400] text-xl">**** **** **** 2345</span>
                    <span className="text-[#A1A1AA] font-[400] text-xl">Expires 08/27</span>
                  </div>
                </div>
            </div>
            <button className="mt-14 bg-[#202020] w-full h-auto flex py-2 px-3 justify-center hover:scale-102 duration-300 text-[#FFFFFF] font-semibold text-2xl hover:cursor-pointer">
              Confirm your order
          </button>
          <div className='items-start flex'>
          <p className="text-gray-500 mt-[12px] col-span-2 text-wrap inline-flex ">
            By continuing, I confirm that I have read and accept the&nbsp;
            <a href="#" className="underline inline-flex">Terms and Conditions&nbsp;</a> and the&nbsp;
            <a href="#" className="underline inline-flex">Privacy Policy</a>.</p>
          </div>
          </div>
    </>
  )
}

export default CheckoutSummary