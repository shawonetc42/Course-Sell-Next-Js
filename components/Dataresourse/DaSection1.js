import React from "react";

function DaSection1() {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#2F00A8]">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-4">
        <img src="/b.png" alt="photo" className="o " />
        <div>
          <h1 className="text-white  text-2xl font-bold px-2">
            Producer: "John Doe"
          </h1>
          <h1 className="text-white font-bold px-2">
            Narrator (voiceover): "In a world filled with wonder and mystery,
            where the unknown beckons to the brave, <br /> one group embarks on
            an epic adventure that will test their courage, determination, and
            friendship."
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DaSection1;
