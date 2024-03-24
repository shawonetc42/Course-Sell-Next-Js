import React from "react";

function Domain() {
  return (
    <div className=" items-center container mx-auto flex flex-col md:flex-row justify-between ">
      <div>
        <h1 className="text-2xl font-bold">Step 1</h1>
        <h1 className="text-2xl font-bold">Choose your domain</h1>
        <div className="flex items-center gap-2">
          <p>www.</p>
          <input
            type="text"
            placeholder="Enter your domain"
            className="w-full p-2 border border-solid border-neutral-300 rounded-md"
          />
          <p>.</p>
          <form class="max-w-sm mx-auto">
            <select
              id="countries"
              class=" custom-select py-2 rounded-md border border-gray-300"
            >
              <option value=".com" selected>
                .com
              </option>
              <option value=".xyz">.xyz</option>
              <option value=".net">.net</option>
              <option value=".us">.us</option>
              <option value=".in">.in</option>
            </select>
          </form>

          <button className="p-2 bg-blue-500 text-white px-4 rounded-md">
            chack
          </button>
        </div>
      </div>
      {/* 2 part */}
      <div>
        <img src="/i3.png" alt="photo" className="w-full" />
      </div>
    </div>
  );
}

export default Domain;
