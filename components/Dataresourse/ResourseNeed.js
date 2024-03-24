import React from "react";

function ResourseNeed() {
  return (
    <div className="bg-slate-100">
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-center">
          Recources that you need
        </h1>
      </div>
      <div className="px-5 mt-4">
        <div className="flex flex-col container mx-auto max-w-6xl md:flex-row justify-between">
          <div className="flex flex-col max-w-2xl  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-8 pt-8 pb-12 font-medium text-center bg-white rounded-3xl leading-[100%] max-md:px-5 max-md:mt-5">
              <img
                loading="lazy"
                srcSet="/b.png"
                className="aspect-square w-[88px]"
              />
              <div className="mt-4 text-xl text-slate-900">Elementor</div>
              <div className="self-stretch mt-6 text-sm leading-5 text-black">
                Elementor is a drag-and-drop page
                <br />
                builder for WordPress. This plugin helps
                <br />
                you create beautiful pages using a visual
                <br />
                editor. It's designed for you to build
                <br />
                dynamic websites quickly.
              </div>
              <div className="justify-center px-6 py-3.5 mt-6 text-base text-white bg-violet-800 rounded-3xl max-md:px-5">
                Get Now
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-w-2xl  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center px-9 py-8 max-w-2xl  font-medium text-center bg-white rounded-3xl leading-[100%] max-md:px-5 max-md:mt-5">
              <img
                loading="lazy"
                srcSet="/b.png"
                className="aspect-square w-[88px]"
              />
              <div className="mt-4 text-xl text-slate-900">Blocksy</div>
              <div className="self-stretch mt-4 text-sm leading-5 text-black">
                Blocksy is a “forever free” WordPress
                <br />
                theme that's optimized to work with the
                <br />
                new block-based content editing
                <br />
                interface in WordPress . The theme was
                <br />
                built using modern web technologies like
                <br />
                React, Webpack, and Babel.
              </div>
              <div className="justify-center px-6 py-3.5 mt-6 text-base text-white bg-violet-800 rounded-3xl max-md:px-5">
                Get Now
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-w-2xl  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-9 py-9 max-w-2xl  text-base font-medium leading-4 text-center bg-white rounded-3xl max-md:px-5 max-md:mt-5">
              <img
                loading="lazy"
                srcSet="/b.png"
                className="aspect-square w-[88px]"
              />
              <div className="mt-5 text-xl text-slate-900">Namehero</div>
              <div className="self-stretch mt-6 leading-5 text-black">
                Name Hero offers high speed
                <br />
                WordPress hosting for your website.
                <br />
                Reseller hosting & VPS hosting experts
                <br />
                powering thousands of happy
                <br />
                customers!
              </div>
              <div className="justify-center px-6 py-3.5 mt-6 text-white bg-violet-800 rounded-3xl max-md:px-5">
                Get Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourseNeed;
