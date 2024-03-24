import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
const data = [
  {
    image:
      "https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/pd79ezuloqtxdswc1a36/be-long-term-video-editor-for-you.png",
    title: "Video Editing",
  },
  {
    image: "/b.png",
    title: "Video Editing and banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmuneUiS6v61mLKsLRyQs4YnkhsQlgkdLut-BGfd9wg&s",
    title: "Video Editing",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/videos/so_0.0,t_main1,q_auto,f_auto/et6ucxx5ytadwo4tqdbr/be-your-professional-video-editor-for-youtube-and-business.png",
    title: "Video Editing",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/237044919/original/411a5b3cd96e8d355351514141c5f4e217480f84/professional-video-editing-in-24h.jpg",
    title: "Video Editing",
  },
  {
    image: "/b.png",
    title: "Video Editing",
  },
];
function Sections2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mt-3 mx-auto">
      {data.map((item) => (
        <div key={item.title}>
          <div className="flex flex-col grow items-center pb-8 mx-auto w-full text-center bg-white rounded-3xl leading-[100%] max-md:mt-5">
            <img
              loading="lazy"
              srcSet={item.image}
              objectFit="cover"
              className="self-stretch w-full aspect-[1.43]"
            />
            <div className="mt-5 text-lg font-bold text-slate-900">
              {item.title}
            </div>
            <div className="flex gap-1.5 justify-center items-center px-6 py-3 mt-5 text-sm text-white bg-purple-700 border border-white border-solid rounded-[40px] max-md:px-5">
              {/* <a
                href={`/views?title=${item.title}id=${item.image}`}
                className="grow font-medium"
              >
                Enroll Now
              </a> */}
              <a
                href={
                  "/views/" +
                  encodeURIComponent(item.title.replace(/\s+/g, "-"))
                }
                className="grow font-medium"
              >
                Enroll-Now
              </a>

              {/* <a
                href={`/views/${encodeURIComponent(item.title)}`}
                className="grow font-medium"
              >
                Enroll Now
              </a> */}

              <div className="font-black">
                <AiOutlineCaretRight />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sections2;
