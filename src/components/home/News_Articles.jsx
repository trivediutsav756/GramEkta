// import React, { useState } from "react";

// const articles = [
//   {
//     img: "/images/news1.jpg", // replace with real image
//     grayscale: true,
//     date: "January 3, 2025",
//     tag: "Donations",
//     title: "See Your Impact: Transparent Donation Tracking",
//   },
//   {
//     img: "/images/news2.jpg",
//     grayscale: true,
//     date: "January 3, 2025",
//     tag: "Educations",
//     title: "Every Contribution Counts: Make a Difference",
//   },
//   {
//     img: "/images/news3.jpg",
//     grayscale: false,
//     date: "January 3, 2025",
//     tag: "Medical Help",
//     title: "Partner for Good: Corporate Sponsorship",
//   },
//   {
//     img: "/images/news4.jpg",
//     grayscale: false,
//     date: "February 1, 2025",
//     tag: "Food Support",
//     title: "Feeding Hope: Community Meal Programs",
//   },
//   {
//     img: "/images/news5.jpg",
//     grayscale: false,
//     date: "March 5, 2025",
//     tag: "Health Support",
//     title: "Healing Together: Free Medical Camps",
//   },
// ];

// const VISIBLE = 3;

// export default function NewsSection() {
//   const [start, setStart] = useState(0);

//   const prev = () => setStart((s) => Math.max(0, s - 1));
//   const next = () =>
//     setStart((s) => Math.min(articles.length - VISIBLE, s + 1));
//   const visible = articles.slice(start, start + VISIBLE);

//   return (
//     <section className="relative bg-gray-100 py-14 px-6 overflow-hidden font-[Nunito,sans-serif]">
//       <h2 className="text-center text-3xl font-black text-gray-900 mb-10">
//         Our Latest News &amp; Articles
//       </h2>

//       <div className="relative flex items-center justify-center gap-0 px-16">
//         {/* Prev button */}
//         <button
//           onClick={prev}
//           disabled={start === 0}
//           className="absolute left-2 z-10 w-11 h-11 rounded-full bg-[#1a5c48] hover:bg-[#0f3d30] disabled:opacity-40 flex items-center justify-center transition-all"
//         >
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M15 18l-6-6 6-6" />
//           </svg>
//         </button>

//         {/* Cards */}
//         <div className="flex gap-5 w-full">
//           {visible.map((item, i) => (
//             <div
//               key={i}
//               className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
//             >
//               {/* Image */}
//               <div className="w-full h-56 overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className={`w-full h-full object-cover ${item.grayscale ? "grayscale" : ""}`}
//                   onError={(e) => {
//                     e.target.style.display = "none";
//                     e.target.parentElement.style.background = "#999";
//                   }}
//                 />
//               </div>

//               {/* Body */}
//               <div className="p-5 flex flex-col flex-1">
//                 {/* Meta */}
//                 <div className="flex items-center gap-4 mb-2.5">
//                   <span className="flex items-center gap-1.5 text-xs text-gray-400">
//                     <svg
//                       width="13"
//                       height="13"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#f0a500"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     >
//                       <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     {item.date}
//                   </span>
//                   <span className="flex items-center gap-1.5 text-xs text-gray-400">
//                     <svg
//                       width="13"
//                       height="13"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#f0a500"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     >
//                       <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
//                     </svg>
//                     {item.tag}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-gray-900 text-[16px] font-extrabold leading-snug mb-5 flex-1">
//                   {item.title}
//                 </h3>

//                 {/* Button */}
//                 <button className="self-start flex items-center gap-2 bg-[#1a5c48] hover:bg-[#0f3d30] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors">
//                   Read More <span>↗</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Next button */}
//         <button
//           onClick={next}
//           disabled={start >= articles.length - VISIBLE}
//           className="absolute right-2 z-10 w-11 h-11 rounded-full bg-[#1a5c48] hover:bg-[#0f3d30] disabled:opacity-40 flex items-center justify-center transition-all"
//         >
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M9 18l6-6-6-6" />
//           </svg>
//         </button>
//       </div>

      
//     </section>
//   );
// }


import React, { useState } from "react";

const articles = [
  {
    img: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3",
    grayscale: true,
    date: "January 3, 2025",
    tag: "Donations",
    title: "See Your Impact: Transparent Donation Tracking",
  },
  {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    grayscale: true,
    date: "January 3, 2025",
    tag: "Educations",
    title: "Every Contribution Counts: Make a Difference",
  },
  {
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    grayscale: false,
    date: "January 3, 2025",
    tag: "Medical Help",
    title: "Partner for Good: Corporate Sponsorship",
  },
  {
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    grayscale: false,
    date: "February 1, 2025",
    tag: "Food Support",
    title: "Feeding Hope: Community Meal Programs",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    grayscale: false,
    date: "March 5, 2025",
    tag: "Health Support",
    title: "Healing Together: Free Medical Camps",
  },
];

// How many cards to show per breakpoint
const getVisible = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function NewsSection() {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = React.useState(getVisible);

  // Update visible count on resize
  React.useEffect(() => {
    const handleResize = () => {
      const next = getVisible();
      setVisibleCount(next);
      setStart((s) => Math.min(s, Math.max(0, articles.length - next)));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStart = articles.length - visibleCount;
  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));
  const visible = articles.slice(start, start + visibleCount);

  return (
    <section className="relative bg-gray-100 py-12 sm:py-14 px-4 sm:px-6 overflow-hidden font-[Nunito,sans-serif]">
      <h2 className="text-center text-2xl sm:text-3xl font-black text-gray-900 mb-8 sm:mb-10">
        Our Latest News &amp; Articles
      </h2>

      <div className="relative flex items-center justify-center px-10 sm:px-14">
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={start === 0}
          className="absolute left-0 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1a5c48] hover:bg-[#0f3d30] disabled:opacity-40 flex items-center justify-center transition-all flex-shrink-0"
        >
          <svg
            width="16" height="16"
            viewBox="0 0 24 24"
            fill="none" stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div
          className="grid gap-5 w-full"
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
          }}
        >
          {visible.map((item, i) => (
            <div
              key={start + i}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              {/* Image */}
              <div className="w-full h-44 sm:h-52 lg:h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.grayscale ? "grayscale" : ""}`}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "#999";
                  }}
                />
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2.5">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg
                      width="13" height="13"
                      viewBox="0 0 24 24"
                      fill="none" stroke="#f0a500"
                      strokeWidth="2" strokeLinecap="round"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg
                      width="13" height="13"
                      viewBox="0 0 24 24"
                      fill="none" stroke="#f0a500"
                      strokeWidth="2" strokeLinecap="round"
                    >
                      <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 text-sm sm:text-[16px] font-extrabold leading-snug mb-4 sm:mb-5 flex-1">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="self-start flex items-center gap-2 bg-[#1a5c48] hover:bg-[#0f3d30] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors">
                  Read More <span>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={start >= maxStart}
          className="absolute right-0 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1a5c48] hover:bg-[#0f3d30] disabled:opacity-40 flex items-center justify-center transition-all flex-shrink-0"
        >
          <svg
            width="16" height="16"
            viewBox="0 0 24 24"
            fill="none" stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

     
    </section>
  );
}