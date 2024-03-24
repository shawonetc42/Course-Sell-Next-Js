import React from "react";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-20 bg-gradient-to-r from-[#2F00A8] to-[#000000] max-md:px-5">
        <div className="mt-10 container mx-auto max-w-6xl">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base text-white max-md:mt-10">
                {/* add a logo */}
                <img
                  loading="lazy"
                  srcSet="https://github.com/shawonetc42/a-code-save/blob/main/Icon%20Svg/logo.png?raw=true"
                  className="max-w-full  w-[50px]"
                />
                <div className="flex flex-col justify-center px-7 py-1.5 mt-10 border-l-4 border-indigo-500 border-solid max-md:px-5">
                  <div className="font-bold leading-5">
                    Give a man a fish and you feed him for a day;
                    <br />
                    teach a man to fish and you feed him for a<br />
                    lifetime.”
                  </div>
                  <div className="mt-8 font-medium leading-[140%]">
                    —Maimonides
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-center text-white max-md:mt-10">
                <div className="self-center text-base leading-4">All pages</div>
                <div className="mt-5 text-base font-medium leading-5">
                  All Courses
                  <br />
                  Contact
                  <br />
                  Privacy Policy
                  <br />
                  Refund and Returns Policy
                  <br />
                  About us
                  <br />
                  faq
                  <br />
                  Terms and condition
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://github.com/shawonetc42/a-code-save/blob/main/Icon%20Svg/allcompanylogo.png?raw=true"
                alt="all company logo"
                className="self-stretch my-auto aspect-[4.35] w-[397px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5  py-3 container mx-auto max-w-6xl  max-md:flex-wrap">
        <div className="flex-auto text-base leading-5 text-black">
          Copyright © 2024 @mexemy.com
        </div>
        <div className="flex gap-4 self-start">
          <a href="">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50527afb8480aced537422c810dd04e4c3607e158a76c1ef460ff78ea7f1e577?"
              className="shrink-0 aspect-square w-[18px]"
            />
          </a>
          <a href="">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9342cc7b2b786839f9e5857ac05823f37ec7702b806cbb04f8c7ab9ca8fc749b?"
              className="shrink-0 aspect-square w-[18px]"
            />
          </a>
          <a href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/930c67854d30c904b33b1ea929252e9149f5b0c3937f6105905d296f387b443c?"
              className="shrink-0 aspect-square w-[18px]"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
