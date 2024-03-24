import React from "react";
import Image from "next/image";
import CourseInfo from "./CourseInfo";
import Header from "../Header";
import CourseReview from "./Course&Review";
function Details() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-2">
        <h3 className="font-bold text-2xl">
          WordPress, Web design & Ecommerce Master Course (Update 3.0)
        </h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-3 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/139037447?v=4"
              className="w-8 h-8 rounded-full"
            />
            <p className="font-bold">Rakibul Hasan Shawon</p>
            <p className="font-bold">
              Categories: Ecommerce, Web Design, Wordpress
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <a href="/">whitelist</a>
            <a href="/">share</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
