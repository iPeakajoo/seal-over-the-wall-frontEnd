

import CartBox from "../components/CartBox"
import CheckedBox from "../components/ui/CheckedBox"
import GiftCard from "../components/GiftCard"
import Questions from "../components/Questions"
import AdBox from "../components/AdBox"


const Cart = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-4xl font-bold mt-[132px]">Cart</h2>
        <div className="flex justify-center items-center w-full pl-[88px]">
          <div className="w-[1072px] flex justify-between mt-[50px] pb-[25px] border-b-2 border-secondary-light-gray-300">
            <div className="flex">
              <CheckedBox />
              <p className="font-semibold text-lg ml-[8px]">Select all</p>
            </div>
            <img src="src\assets\images\trash-bin-2-svgrepo-com.svg" className="w-[28px] h-[28px] hover:cursor-pointer"/>
          </div>
        </div>
      <CartBox image="src\assets\images\more-espresso-front-black.png" name="More Espresso" size="M" color="black" quantity="1" prize="499"/>
      <CartBox image="src\assets\images\fetch-front-blue.png" name="Fetch This" size="M" color="blue" quantity="1" prize="499"/>
      <CartBox image="src\assets\images\don't-kill-white.png" name="Don't kill my vibe" size="M" color="white" quantity="1" prize="299"/>
      <CartBox image="src\assets\images\screaming-blue.png" name="Have you try Screaming?" size="M" color="blue" quantity="1" prize="399"/>
      <div className="flex flex-col justify-center items-center w-full mt-[42px] pl-[360px] mb-[72px]">
        <div className="flex w-[800px] mb-[32px]">
          <input
            type="text"
            placeholder="Apply a promo code"
            className="w-[664px] h-[56px] text-center border-2 border-secondary-light-gray-300"/>
          <button className="w-[120px] h-[56px] ml-[16px] bg-secondary-light-gray-500 text-xl font-semibold hover:scale-105 duration-300 hover:cursor-pointer">Apply</button>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Your savings</p>
          <p className="text-right font-semibold text-lg">0.00 THB</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Shipping costs</p>
          <p className="text-right font-semibold text-lg">120 THB</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Tax inclusive</p>
          <p className="text-right font-semibold text-lg">7 %</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Total</p>
          <div className="flex justify-between">
            <p className="font-semibold text-lg">4</p>
            <p className=" font-semibold text-lg">1,816 THB</p>
          </div>
        </div>
        <button className="w-[800px] h-[56px] bg-black font-semibold text-white text-xl hover:scale-105 duration-300 hover:cursor-pointer">Check Out</button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-[32px] w-[1616px] text-start">Gift Cards</h2>
        <div className="flex mb-[160px] gap-[16px]">
          <GiftCard giftImage="src\assets\images\GFC-500.png" giftName="500" giftPrize="500"/>
          <GiftCard giftImage="src\assets\images\GFC-1000.png" giftName="1,000" giftPrize="1,000"/>
          <GiftCard giftImage="src\assets\images\GFC-1500.png" giftName="1,500" giftPrize="1,500"/>
          <GiftCard giftImage="src\assets\images\GFC-2000.png" giftName="2,000" giftPrize="2,000"/>
        </div>
      </div>
      <AdBox />
      <Questions />
    </div>
  )
}
export default Cart