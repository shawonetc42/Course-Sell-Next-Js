import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
function Header() {
  const [photo, setPhoto] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user.photoURL)
      // console.log(user.reloadUserInfo.createdAt)
      setIsAuthenticated(!!user);
      setPhoto(user?.photoURL);
    });
  }, []);
  return (
    <div className="flex gap-5 justify-between items-center shadow-sm px-8 py-3.5 bg-white max-md:flex-wrap max-md:px-5">
      <div className="flex gap-2 items-center font-bold">
        <img
          loading="lazy"
          srcSet="/logo.png"
          className=" rounded-full w-[30px]"
        />
        <p>Maxim</p>
      </div>
      {/* 2 */}
      <div className=" hidden md:flex gap-3.5 self-stretch my-auto text-sm font-semibold leading-5 capitalize text-slate-900 max-md:flex-wrap ">
        <a
          href="/courses"
          className="my-auto transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:rounded-lg"
        >
          All Courses
        </a>

        <a
          href="/dashboard"
          className="grow my-auto transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:rounded-lg "
        >
          Dashboard
        </a>
        <div className="flex gap-1 whitespace-nowrap">
          <a
            href="/dataresourse"
            className="grow my-auto transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:rounded-lg"
          >
            Resource
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43028b5a537d89751388e6195f9b39c4d4bb763e35304eb4a71cd86d28824d81?"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-1 whitespace-nowrap">
          <div className="grow my-auto transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:rounded-lg">
            Contact
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbced6464a20f6771fda015d2e102756169f7cf0e4d40dfad4a0bcec292de6b4?"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-1 whitespace-nowrap">
          <div className="grow my-auto transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:rounded-lg">
            Affiliate
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/290f950789dfd9af471f98a6d930cd34a8594584fb9a6a651bc59c775928685f?"
            className="shrink-0 aspect-square w-[18px] transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8837cbd95551f8e7fcf56e305fd05bcb1df7be26c7af490ba588e495aadfc3?"
          className="shrink-0 self-stretch my-auto aspect-square w-[15px]"
        />
        <div className="self-stretch my-auto text-xs font-semibold leading-4 uppercase text-slate-900">
          0.0 $
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50c95bf56d77bf1eaac8d4191b762ee6dd3480259bdeda55ab12f72a7c81b4c?"
          className="shrink-0 self-stretch my-auto aspect-square w-[15px]"
        />

        <img src={photo} alt="user image" className=" w-6 h-6 rounded-full" />
        {isAuthenticated ? (
          // Render menu button for authenticated user
          <button className="justify-center self-stretch px-4 py-3 text-sm font-medium leading-4 text-center text-white whitespace-nowrap bg-indigo-600 rounded">
            Menu
          </button>
        ) : (
          // Render login button for non-authenticated user
          <a
            href="/register"
            className="justify-center self-stretch px-4 py-3 text-sm font-medium leading-4 text-center text-white whitespace-nowrap bg-indigo-600 rounded"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
