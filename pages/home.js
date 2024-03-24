import Header from "@/components/Header";
import Home2Section from "@/components/Home/Home-2/Home2Section";
import Patnar from "@/components/Home/Home-2/Patnar";
import SkillGrow from "@/components/Home/Home-2/SkillGrow";
import React from "react";

function home() {
  return (
    <div>
      <Header />
      <Home2Section />
      <Patnar />
      <SkillGrow />
    </div>
  );
}

export default home;
