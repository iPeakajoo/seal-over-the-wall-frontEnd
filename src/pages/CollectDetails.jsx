import React from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton";
import BackButton from "../components/collectDetailsPage/BackButton";
import PriceAndStockTable from "../components/collectDetailsPage/PriceAndStockTable";
import TotalProfitTable from "../components/collectDetailsPage/TotalProfitTable";


const CreateDesignLayout = () => {
  return (
    <div>
        <div className="font-semibold flex justify-center items-center h-16 bg-gray-200 mb-7">
            Stepper Placeholder
        </div>
            <section className="mb-10 pl-[288px]">
                <h1 className="text-4xl font-bold">Collect Details</h1>
                <p className="text-lg mt-4 mb-6">
                    Okay, let's get your product ready to shine! Tell us the price and how many you've got. Wanna do a sale? Set it up here! We'll even show your potential
                     <br/>profit per item and the total after our small fee and your costs. Go ahead and fill it in!
                 </p>
                <div className="flex justify-end items-center gap-4 pr-[152px] mt-1.5 ">
                <button>
                <BackButton />
                </button>
                
                <button>
                <NextStepButton />
                </button>
                </div>
        </section>
        <section className="flex justify-between w-[1616px] h-[1556px] mx-[152px] mt-3.5 p-1.5">
            <PriceAndStockTable />
            <TotalProfitTable />

        </section>
      <Outlet />
    </div>
  );
};

export default CreateDesignLayout;
