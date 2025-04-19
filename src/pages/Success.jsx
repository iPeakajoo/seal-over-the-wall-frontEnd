import React from 'react'
import CheckoutAddressCard from '../components/CheckoutAddressCard'
import OrderStatusCard from '../components/OrderStatusCard'
import TotalCard from '../components/TotalCard'

const Success = ({orderId}) => {
  return (
    <div className='flex flex-col content-center w-full mx-[152px]'>
        <article className='w-full'>
        <div className="space-y-4">
            <h2 className="text-left text-[32px] font-semibold border-b-1 border-[#A1A1AA] pb-2">Your Oder</h2>
            <p className="text-left text-2xl font-normal border-b-1 border-[#A1A1AA] pb-4">Order ID: {orderId}</p>
            <h2 className="text-left text-[32px] font-semibold mb-8 pt-2">Order Summary</h2>
        </div>
      </article>
      <section className="flex outline-1 outline-red-500 gap-4">

        {/* Products detail */}
        <div className="flex flex-row w-[936px] min-h-[875px] h-auto">
            <div className="item w-full flex flex-col border border-[#A1A1AA] px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-4 sm:py-6 md:py-10 lg:py-12 xl:py-14 gap-y-6 mb-40">
                <div className="flex flex-wrap outline-1 items-center w-full max-w-full hover:shadow-lg hover:scale-105 hover:transition duration-300 cursor-pointer">
                    <div className="w-41 h-41 flex-shrink-0">
                        <img
                        src="src\assets\images\Products\t-shirt\more-espresso\more-espresso-front-black.png"
                        alt="Mug navy color"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col p-5 flex-1">
                        <h4 className="text-2xl font-semibold">Inside Squad</h4>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-2">
                            <div className="flex items-center gap-2 mr-4">
                                <span className="text-lg font-normal">color:</span>
                                <div className="w-6 h-6 rounded-full bg-[#202020]"></div>
                                <i className="fa-solid fa-angle-down w-4 h-4"></i>
                            </div>
                            <div className="flex items-center gap-2 mr-auto">
                                <span className="text-lg font-normal">size: M</span>
                                <i className="fa-solid fa-angle-down w-4 h-4"></i>
                            </div>
                            <span className="text-xl font-medium text-right ml-auto">499 THB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Other detail*/}
        <div className='flex flex-col gap-4 w-[664px] min-h[875px]'>

            {/* Shipping detail */}
            <div className='border border-[#A1A1AA] w-full p-6'>
                <CheckoutAddressCard name="SomChai Kitkardee" address="62/1 Soi Ekkachai 116, Bang Bon Nuea,       Bang Bon, 10150, Bangkok, Thailand " tel="080-236-6966" className/>
            </div>

            {/* Order status */}
            <div className='border border-[#A1A1AA] w-full p-6'>
                <OrderStatusCard orderId="356945678" method="Fastest Delivery" date="19 March 2025" status="On Delivering"/>
            </div>

            {/* Summary detail */}

            <div className='w-full'>
                <TotalCard subTotal="1696" shippingCost='120' orderValue='1816' currentStep='successful'/>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Success