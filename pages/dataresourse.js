import DaSection1 from "@/components/Dataresourse/DaSection1";
import DataNavber from "@/components/Dataresourse/DataNavber";
import Domain from "@/components/Dataresourse/Domain";
import ResourseNeed from "@/components/Dataresourse/ResourseNeed";
import Header from "@/components/Header";
import React from "react";

function dataresourse() {
  return (
    <div>
      <Header />
      <DataNavber />
      <Domain />
      <DaSection1 />
      <ResourseNeed />
    </div>
  );
}

export default dataresourse;
