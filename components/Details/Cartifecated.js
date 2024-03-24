import React from "react";
import { Image } from "next/image";

function Cartifecated() {
  return (
    <div className="flex flex-col md:flex-row justify-between ">
      <div className="flex flex-col px-6 pt-8 pb-12 text-black bg-gray-50 rounded max-w-[459px]">
        <div className="text-xl font-bold leading-8">
          A beautiful Certificate is waiting for you !
        </div>
        <div className="mt-4 text-base font-medium leading-5">
          Add this certificate to your resume to demonstrate your
          <br />
          skills & increase your chances of getting noticed.
        </div>
      </div>
      <div>
        <img
          src="/cart.png"
          alt="cartifoicate"
          className="w-32 h-32 mx-auto my-6"
        />
      </div>
    </div>
  );
}

export default Cartifecated;
