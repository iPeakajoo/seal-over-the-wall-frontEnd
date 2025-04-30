import React from 'react'


export default function Login() {
  return (
    <div className="flex items-center justify-center">
        <div className="w-[1440px] h-[1024px] grid grid-cols-2 shadow-xl">
            <div className="flex col-span-1 w-full h-full items-center justify-center">
                <div className="flex flex-col items-center w-[430px] mt-[48px]">
                    <img src="src\assets\images\custommike-navbar-logo.svg" className="w-[139px] h-[18px] mb-[185px]"/>
                    <div className="flex flex-col items-center mb-[48px]">
                        <h3 className="text-4xl font-bold">Welcome Back</h3>
                        <p className="mt-[12px]">Enter your email and password to access your account</p>
                    </div>
                    <div className="grid grid-cols-2 w-full">
                        <p className="text-start mb-[8px]">Email</p>
                        <input placeholder="Enter your email" className="col-span-2 rounded-lg border-1 border-secondary-light-gray-300 py-[14px] px-[16px] mb-[24px]" />
                        <p className="text-start mb-[8px]">Password</p>
                        <input placeholder="Enter your password" className="col-span-2 rounded-lg border-1 border-secondary-light-gray-300 py-[14px] px-[16px]" />
                    </div>
                    <div className="flex justify-between w-full mt-[12px]">
                        <div className="flex">
                            <input type="checkbox" className="border-secondary-light-gray-300 rounded-lg"/>
                            <p className="ml-[8px]">
                                Remember me
                            </p>
                        </div>
                        <p className="flex text-end">
                            Forgot Password
                        </p>
                    </div>
                    <button className={`bg-[#202020] mt-[40px] w-full h-auto rounded-lg flex py-2 justify-center hover:scale-105 duration-300 text-[#FFFFFF] text-2xl hover:cursor-pointer`}>
                        Sign In
                    </button>
                    <div className="flex gap-[8px]">
                        <button className="flex w-[211px] h-[48px] rounded-lg border-1 border-secondary-light-gray-300 items-center justify-center gap-[8px] mt-[12px] hover:scale-105 duration-300 hover:cursor-pointer">
                            <img src="src\assets\images\google-color-svgrepo-com.svg" className="w-[24px] h-[24px]"/>
                            <p>Google</p>
                        </button>
                        <button className="flex w-[211px] h-[48px] rounded-lg border-1 border-secondary-light-gray-300 items-center justify-center gap-[8px] mt-[12px] hover:scale-105 duration-300 hover:cursor-pointer">
                            <img src="src\assets\images\facebook-svgrepo-com.svg" className="w-[24px] h-[24px]"/>
                            <p>Facebook</p>
                        </button>
                    </div>
                    <p className="mt-[185px]">Don't have an account? <span>Sign Up</span></p>
                </div>
            </div>
            <div className="col-span-1 w-full h-full bg-[#ECEFE8]">
                <div className="w-full h-full relative">
                    <div className="absolute flex w-full h-full justify-center items-center">
                        <img src="src\assets\images\fetch-front-black.png" className="w-[462px] h-[462px]"/>
                    </div>
                    <h2 style={{ fontFamily: 'Bebas Neue, sans-serif' }} className="absolute w-[200px] text-[6rem] font-semibold tracking-['-3.84em']">FETCH T-SHIRT</h2>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
