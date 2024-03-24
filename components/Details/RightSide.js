import React from "react";
import CourseAuthorDetaols from "./CourseAuthorDetaols";
import Audence from "./Audence";

function RightSide() {
  return (
    <div className="mt-2">
      <div className="flex flex-col justify-center bg-white rounded-md border border-solid border-neutral-300 leading-[160%] ">
        <div className="flex flex-col px-8 py-10 w-full rounded-md bg-slate-100">
          <div className="flex gap-1 items-center">
            <div className="grow text-2xl font-bold text-black">2,999.00৳</div>
            <div className="flex-auto text-sm font-medium text-slate-500">
              3,999.00৳
            </div>
          </div>
          <div className="justify-center items-center px-16 py-4 mt-8 text-base font-medium leading-5 text-center text-white bg-indigo-500 rounded">
            Enroll Now
          </div>
          <div className="flex gap-1.5 self-start mt-4 ml-6 text-sm font-medium text-slate-500">
            <div className="grow">Enrollment validity:</div>
            <div>Lifetime</div>
          </div>
        </div>
        <div className="flex flex-col items-start px-14 py-8 w-full text-base font-medium text-gray-700 rounded-none border-t border-solid border-neutral-300">
          <div>All Levels</div>
          <div className="flex gap-1 mt-6">
            <div>45 hours</div>
            <div className="flex-auto">26 minutes Duration</div>
          </div>
          <div className="mt-3">March 18, 2024 Last Updated</div>
          <div className="mt-5">Certificate of completion</div>
        </div>
      </div>
      <CourseAuthorDetaols />
      {/* another */}
      <Audence />
    </div>
  );
}

export default RightSide;
