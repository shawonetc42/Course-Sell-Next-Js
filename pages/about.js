import AboutUS from "@/components/About/AboutUS";
import Addres from "@/components/About/Addres";
import SectionAbout from "@/components/About/SectionAbout";
import Header from "@/components/Header";
import React from "react";

function about() {
  return (
    <div>
      <Header />
      <AboutUS />
      <SectionAbout />
      <Addres />
    </div>
  );
}

export default about;
