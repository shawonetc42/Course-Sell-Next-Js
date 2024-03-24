import React from "react";

function CourseAuthorDetaols() {
  return (
    <>
      <div
        className="flex flex-col items-start py-2 pr-20 pl-8 text-base leading-6 text-black bg-gray-50 rounded-md border-t border-r border-l 
      border-solid border-neutral-300 "
      >
        <div className="font-medium">A course by</div>
        <div className="flex gap-4  font-bold">
          <img
            loading="lazy"
            srcSet="https://i.pravatar.cc/400?img=12"
            className="shrink-0 w-12 shadow-sm rounded-full aspect-square"
          />
          <div className="flex-auto my-auto">Md Mehedi Hasan</div>
        </div>
      </div>
      <div
        className="flex flex-col items-start py-7 pr-20 pl-8 text-base font-medium leading-6 text-black bg-gray-50 border-t border-r border-l border-solid
       border-neutral-300 "
      >
        <div className="text-xl font-bold">Material Includes</div>
        <div className="mt-5 ml-5 w-full leading-7">
          180+ high-quality recorded lessons.
        </div>
        <div className="mt-3.5 ml-6">Session-based resources.</div>
        <div className="mt-7 ml-5">27 course modules.</div>
        <div className="mt-6 ml-5">10 complete website projects.</div>
        <div className="mt-6 ml-5">Lifetime updates.</div>
        <div className="mt-5 ml-5">All resources and templates.</div>
        <div className="mt-6 ml-5">Support group.</div>
        <div className="mt-6 ml-5">And certificates.</div>
      </div>
    </>
  );
}

export default CourseAuthorDetaols;
