import React from "react";

function Home2Section() {
  return (
    <div className="justify-center items-center px-16 py-20 bg-gradient-to-r from-[#2F00A8] to-[#000000] max-md:px-5">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-4">
        <div className="flex flex-col px-5 pt-2 max-w-[536px]">
          <div className="mt-2 w-full text-5xl font-bold text-white leading-[57px] max-md:max-w-full">
            Learning is <br />
            Make of it. Make it Yours
            <br />
            at VideoEditing.
          </div>
          <div className="flex gap-4 items-center mt-7 text-base text-slate-900 max-md:flex-wrap">
            <div className="flex gap-3 justify-center items-center self-stretch px-8 py-5 my-auto font-semibold text-center text-white capitalize bg-indigo-600 shadow-sm leading-[112%] rounded-[50px] max-md:px-5">
              <div className="grow">Start Free Trial</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/187b972a8bcb483eee3a074cde04f44cf3e2f8bdb93a172233290b040cbef55e?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                className="shrink-0 self-start aspect-[1.08] w-[15px]"
              />
            </div>
            <div class="flex justify-center items-center h-14 w-14 bg-amber-400 rounded-full border border-solid border-slate-900 shadow-sm">
              <div class="font-black">logo</div>
            </div>

            <div className="flex-auto text-white self-stretch my-auto text-base font-medium leading-5">
              Watch Our
              <br />
              Class Demo
            </div>
          </div>
        </div>
        {/* 2nd part */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f27e182dbf6c044a7bc5916ca703369304af08f77dc979c8605f9128fd6a43?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="w-full aspect-[1.41] max-w-[840px]"
        />
      </div>
    </div>
  );
}

export default Home2Section;
