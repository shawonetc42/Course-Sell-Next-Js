import React from "react";

function CourseReview() {
  return (
    <div className="flex flex-col justify-center text-base leading-6 backdrop-blur-[7px] bg-white bg-opacity-60 max-w-[860px]">
      <div className="flex gap-5 px-5 border-b border-solid border-neutral-300 max-md:flex-wrap">
        <div className="justify-center px-5 py-4 text-violet-800 border-b-2 border-violet-800 border-solid">
          Course Info
        </div>
        <div className="flex-auto my-auto text-gray-700 max-md:max-w-full">
          Reviews
        </div>
      </div>
    </div>
  );
}

export default CourseReview;
