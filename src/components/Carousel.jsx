import React from "react";

export default function Carousel({children: slides}) {
  return (
    <div className="overflow-hidden relative bg-[#ECEFE8] w-full h-full ">
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex w-[462px] h-[462px] gap-5">{slides}</div>
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <img src=".\src\assets\images\chevron-left.svg"
        className="w-[30px] h-[30px] hover:cursor-pointer"/>
        <img src=".\src\assets\images\chevron-right.svg"
        className="w-[30px] h-[30px] hover:cursor-pointer"/>
      </div>
    </div>
  )
}