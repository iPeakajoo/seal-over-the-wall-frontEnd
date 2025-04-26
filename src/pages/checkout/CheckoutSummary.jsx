import React from 'react'
import CheckoutAddress from '../../components/CheckoutAddressCard'
import CheckoutShipping from '../../components/CheckoutShippingCard'
import CheckoutCard from '../../components/CheckoutCardCard'
import CheckoutButton from '../../components/CheckoutButtonCard'




const CheckoutSummary = ({onNext}) => {



  return (
    <>
    <div id ="summary" className="flex flex-col w-[1072px] gap-2 items-center mx-auto">


            <div id ="shippingInformation" className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secondary-light-gray-500">
              <CheckoutAddress name='Somchai Kitkardee' address='62/1 Soi Ekkachai 116, Bang Bon Nuea, Bang Bon, 10150, Bangkok, Thailand' tel='080-236-6966'/>
              <button className="text-lg font-[500] items-center hover:cursor-pointer hover:scale-100 duration-300 p-4">Edit</button>
            </div>

            <div id ="shippingInformation" className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secondary-light-gray-500">
              <CheckoutShipping method = "Fastest Delivery" methodPrice = {150} date ="March 15 2025" />
            </div>

            <div id ="paymentMethod" className=" border-[1.25px] border-secondary-light-gray-500 p-6 w-full h-auto mb-14 ">
              <CheckoutCard cardNumber='1234 5678 9101 1112' expire="02/27"/>
            </div>
            <button onClick={onNext} className='w-full'><CheckoutButton currentStep='summary'/></button>
          <div className='items-start flex w-full'>
          <p className="text-gray-500 mt-[12px] col-span-2 text-wrap inline-flex">
            By continuing, I confirm that I have read and accept the&nbsp;
            <a href="#" className="underline inline-flex">Terms and Conditions&nbsp;</a> and the&nbsp;
            <a href="#" className="underline inline-flex">Privacy Policy</a>.</p>
          </div>
          </div>
    </>
  )
}

export default CheckoutSummary