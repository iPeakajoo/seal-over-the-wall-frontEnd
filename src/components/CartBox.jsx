import React from 'react'
import CheckedBox from "./ui/CheckedBox"
import { Checkbox }  from "./ui/checkbox"

export default function CartBox({image, name, color, size, prize, quantity}) {
  return (
    <div className="flex items-center justify-center">
      <div className=" mr-[64px]">
        <CheckedBox />
      </div>
      <div className="flex w-[1072px] h-[204px] items-center border-b-2 border-secondary-light-gray-300">
          <img src={image} className="w-[204px] h-[200px]"/>
          <div className="flex w-full justify-between items-center py-[60px] pl-[68px]">
            <div className="grid grid-cols-2">
              <h3 className="col-span-2 text-2xl font-semibold">{name}</h3>
              <div className="flex col-span-1 items-center ">
                <p className="text-lg mr-[8px]">color: {color}</p>
                <img src="src\assets\images\arrow-down.svg" className="w-[16px] h-[16px] mr-[34px]"/>
              </div>
              <div className="flex col-span-1 items-center">
                <p className="text-lg mr-[8px]">size: {size}</p>
                <img src="src\assets\images\arrow-down.svg" className="w-[16px] h-[16px]"/>
              </div>
              <p className="col-span-2">{prize} THB</p>
            </div>
            <div className="flex gap-[16px]">
              <button className="flex items-center justify-center w-[24px] h-[24px] font-bold border-2 rounded-full">+</button>
              <p>{quantity}</p>
              <button className="flex items-center justify-center w-[24px] h-[24px] font-bold border-2 rounded-full">-</button>
            </div>
            <div className="flex gap-[8px] items-center">
              <p>{prize} THB</p>
              <img src="src\assets\images\circle-xmark-solid.svg" className="flex items-center justify-center w-[16px] h-[16px]"/>
            </div>
          </div>
      </div>
    </div>
  )
}
