import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

function Section1() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex overflow-hidden relative bg-gradient-to-r from-[#2F00A8] to-[#000000] flex-col justify-center items-center px-16 py-20 w-full min-h-[610px] max-md:px-5 max-md:max-w-full">
        <div className="relative mt-10 mb-3.5 max-w-full w-[1080px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch my-auto text-white leading-[100%] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full">
                  Our latest course:
                </div>
                <div className="mt-9 text-6xl font-bold tracking-tight leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Video Editing and Storytelling
                </div>
                <div className="flex gap-1.5 justify-center items-center self-start px-6 py-3 mt-6 text-base text-center text-black bg-yellow-400 rounded-2xl max-md:px-5">
                  <div className="grow my-auto font-semibold">Enroll Now</div>
                  <div className="font-black">
                    <AiOutlineCaretRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow pb-10 w-full text-3xl font-bold leading-8 text-center rounded-2xl bg-white text-slate-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="/b.png"
                  alt="Video Editing"
                  className="w-full aspect-[1.43]"
                />
                <div className="self-center mt-9">Video Editing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
