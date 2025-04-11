import { ClassNames } from '@emotion/react'
import React from 'react'

const CheckoutSummary = () => {
  return (
    <>
    <div id ="summary" class="flex flex-col w-[1072px] gap-2 items-center outline-1">

            <div id ="shippingInformation" class="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-[#A1A1AA]">
              <div id="shipping" class="w-[504px] h-auto">
                <p class="mb-6 text-[20px] text-[#A1A1AA] font-semibold">Shipping Address</p>
                <p id="name" class="mb-3 text-[24px] font-medium">Somchai Kitkardee</p>
                <p id="Address" class="text-[24px] font-[500] text-wrap">62/1 Soi Ekkachai 116, Bang Bon Nuea, <br/>Bang Bon, 10150, Bangkok, Thailand <br/>080-236-6966</p>
              </div>
              <button class="text-lg font-[500] items-center inline-flex hover:cursor-pointer hover:outline-gray-400 hover:outline-1 hover:scale-100 duration-300 h-fit p-4">Edit</button>
            </div>

            <div id ="shippingInformation" class="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-[#A1A1AA]">
              <div id="shipping" class="w-[504px] h-auto">
                <p class="mb-6 text-[20px] text-[#A1A1AA] font-[600]">Shipping Method</p>

              </div>
              <button class="font-[500] items-center inline-flex hover:cursor-pointer hover:outline-gray-400 hover:outline-1 hover:scale-100 duration-300 h-fit p-4">Edit</button>
            </div>

            <div id ="paymentMethod" class=" border-[1.25px] p-6 w-full h-auto">
                <p class="inline-flex mb-6 text-[20px] text-[#A1A1AA] font-[600]">Payment Methods</p>
                <div class="w-[18rem] h-auto flex justify-between items-center gap-10">
                  <div class="w-auto h-auto border">
                    <span class="text-[#202020] font-[400] text-xl">**** **** **** 2345</span>
                    <span class="text-[#A1A1AA] font-[400] text-xl">Expires 08/27</span>
                  </div>
                </div>
            </div>
            <button class="mt-14 bg-[#202020] w-full h-auto flex py-2 px-3 justify-center hover:scale-102 duration-300 text-[#FFFFFF] font-semibold text-2xl hover:cursor-pointer">
              Confirm your order
          </button>

          <p class="text-gray-500 mt-[12px] col-span-2 text-wrap">
            By continuing, I confirm that I have read and accept the 
            <a href="#" class="underline">Terms and Conditions</a> and the
            <a href="#" class="underline">Privacy Policy</a>.</p>
          </div>
    </>
  )
}

export default CheckoutSummary