import React from 'react'

function CheckoutShipping({method, date,methodPrice}) {
  return (
    <div id ="shippingInformation" className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secoundary-light-gray-500">
        <div id="shipping" className="w-full h-auto">
            <p className="mb-6 text-[20px] text-[#A1A1AA] font-[600]">Shipping Method</p>
            <div className="flex justify-between mb-6">
                <div className="flex flex-col">
                      <input type="radio" id="standard" name="deliveryOption" value="standard" defaultChecked />
                      <label className='ml-2 text-primary-black font-semibold text-xl ' for="standard">{method}</label>
                      <span className='text-secoundary-light-gray-500 font-normal'>{`Will be received by ${date}.`}</span>
                </div>
                      <span class="font-[500]">{methodPrice}</span>
            </div>
        </div>
    </div>
  )
}

export default CheckoutShipping