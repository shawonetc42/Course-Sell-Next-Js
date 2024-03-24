// pages/id.js

import React from "react";
import { useRouter } from "next/router";
import Details from "@/components/Details/Details";
import CourseInfo from "@/components/Details/CourseInfo";
import RightSide from "@/components/Details/RightSide";
const data = [
  {
    id: 1,
    title: "Course 1",
  },
  {
    id: 2,
    title: "Course 2",
  },
  {
    id: 3,
    title: "Course 3",
  },
];
function IdPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Details />
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <CourseInfo />
        <RightSide />
      </div>
    </div>
  );
}

export default IdPage;
