import React from "react";

function Sections3() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex overflow-hidden relative bg-gradient-to-r from-[#2F00A8] to-[#000000] flex-col justify-center items-center px-16 py-20 w-full min-h-[610px] max-md:px-5 max-md:max-w-full">
        {/* add images */}
        {/* <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        /> */}
        <div className="relative mt-10 mb-3.5 max-w-full w-[1080px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch my-auto text-white leading-[100%] max-md:mt-10 max-md:max-w-full">
                <div className="mt-9 text-6xl font-bold tracking-tight leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Incompetent <br /> youth society <br /> Skillfully raised{" "}
                  <br /> Our newPathway
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow pb-10 w-full text-3xl font-bold leading-8 text-center bg-white rounded-3xl text-slate-900 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="..."
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

export default Sections3;
