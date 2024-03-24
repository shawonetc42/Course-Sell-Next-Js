import React from "react";

function AboutUS() {
  return (
    <div className="justify-center items-center px-16 py-20 bg-gradient-to-r from-[#2F00A8] to-[#000000] max-md:px-5">
      <div className="flex justify-center">
        <p className="text-white text-2xl font-bold">About us</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img
          src="https://raw.githubusercontent.com/shawonetc42/a-code-save/55ad8f435cb5c76cc1af424b80bde24826591028/Icon%20Svg/Social%20Icon/fb.svg"
          alt="fb icon"
          className="w-5 h-5 rounded-full"
        />
        <img
          src="https://raw.githubusercontent.com/shawonetc42/a-code-save/55ad8f435cb5c76cc1af424b80bde24826591028/Icon%20Svg/Social%20Icon/yt.svg"
          alt="yt icon"
          className="w-5 h-5 rounded-full"
        />
        <img
          src="https://raw.githubusercontent.com/shawonetc42/a-code-save/55ad8f435cb5c76cc1af424b80bde24826591028/Icon%20Svg/Social%20Icon/ins.svg"
          alt="insta icon"
          className="w-5 h-5 rounded-full"
        />
      </div>
    </div>
  );
}

export default AboutUS;
