import React from "react";
import CourseAuthorDetaols from "./CourseAuthorDetaols";
import CourseReview from "./Course&Review";
import Explain from "./Explain";
import Cartifecated from "./Cartifecated";

function CourseInfo() {
  return (
    <div className=" ">
      <img src="/play.png" alt="" className="mt-2" />

      {/* right side sections */}
      <CourseReview />
      {/* additional sections here */}
      <h1 className="text-2xl font-bold">About Course</h1>
      <div className="max-w-[860px]">
        <p>
          If you lack skills beyond academic learning in the present era, you
          may struggle to progress in life. Because no matter how much we
          advance in the digital world, our skills are valued more than our
          certificates. Therefore, I first think about which skills I can use to
          build my career. If I can teach others those skills, they too can
          achieve something on their own and eradicate the curse of unemployment
        </p>
      </div>
      <h1 className="text-2xl font-bold">What we learn</h1>
      <div className="flex max-w-[860px]">
        <p>
          The entire process from acquiring a domain and hosting for a website
          to creating and publishing it on the internet has been taught step by
          step. Each topic has been illustrated with practical examples.
        </p>
        <p>
          The entire process from acquiring a domain and hosting for a website
          to creating and publishing it on the internet has been taught step by
          step. Each topic has been illustrated with practical examples.
        </p>
      </div>
      <h1 className="text-2xl font-bold">Course Content</h1>
      <Explain />
      <Cartifecated />
    </div>
  );
}

export default CourseInfo;
