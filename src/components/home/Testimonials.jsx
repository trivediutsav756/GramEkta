// import { useState, useRef } from "react";

// const testimonials = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop&crop=face",
//     name: "Mustafa Kamal",
//     role: "CEO, Founder",
//     rating: 5.0,
//     quote:
//       "Stay informed about our upcoming events and campaigns. Whether it's a fundraising gala, a charity run, or a community outreach program, there are plenty of ways to get involved and support our cause. Our donation process uses the latest encryption technology.",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop&crop=face",
//     name: "Priya Sharma",
//     role: "Program Director",
//     rating: 5.0,
//     quote:
//       "Working with this foundation has been a life-changing experience. The team is incredibly dedicated and every donation truly makes a tangible difference in the communities we serve.",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop&crop=face",
//     name: "Alex Fernandes",
//     role: "Volunteer Lead",
//     rating: 5.0,
//     quote:
//       "The programs are thoughtfully designed and the staff genuinely cares about outcomes. Our clean water initiative alone has brought safe drinking water to hundreds of families.",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop&crop=face",
//     name: "Sneha Patel",
//     role: "Community Partner",
//     rating: 5.0,
//     quote:
//       "The Gram Ekta Foundation has transformed our village in ways we never imagined possible. Every initiative has created lasting change.",
//   },
// ];

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const [animClass, setAnimClass] = useState("");
//   const busy = useRef(false);

//   const total = testimonials.length;
//   const t = testimonials[current];

//   const slide = (nextIdx, direction) => {
//     if (busy.current) return;
//     busy.current = true;

//     const outClass = direction === "right" ? "t-out-left" : "t-out-right";
//     const inClass = direction === "right" ? "t-in-right" : "t-in-left";

//     setAnimClass(outClass);
//     setTimeout(() => {
//       setCurrent(nextIdx);
//       setAnimClass(inClass);
//       setTimeout(() => {
//         setAnimClass("");
//         busy.current = false;
//       }, 300);
//     }, 180);
//   };

//   const prev = () => slide((current - 1 + total) % total, "left");
//   const next = () => slide((current + 1) % total, "right");

//   const padded = String(current + 1).padStart(2, "0");
//   const paddedTotal = String(total).padStart(2, "0");
//   const progressPct = ((current + 1) / total) * 100;

//   return (
//     <section className="w-full bg-white font-['Inter',system-ui,sans-serif] py-12 md:py-16">
//       {/* Custom keyframe animations – Tailwind doesn't have these built‑in */}
//       <style>{`
//         @keyframes tInRight {
//           from { opacity: 0; transform: translateX(40px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes tInLeft {
//           from { opacity: 0; transform: translateX(-40px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes tOutLeft {
//           from { opacity: 1; transform: translateX(0); }
//           to   { opacity: 0; transform: translateX(-40px); }
//         }
//         @keyframes tOutRight {
//           from { opacity: 1; transform: translateX(0); }
//           to   { opacity: 0; transform: translateX(40px); }
//         }

//         .t-in-right { animation: tInRight 0.3s cubic-bezier(0.16,1,0.3,1) both; }
//         .t-in-left  { animation: tInLeft  0.3s cubic-bezier(0.16,1,0.3,1) both; }
//         .t-out-left  { animation: tOutLeft  0.18s ease both; }
//         .t-out-right { animation: tOutRight 0.18s ease both; }
//       `}</style>

//       <div className="max-w-6xl mx-auto px-5">
//         {/* Two‑column flex layout – edge to edge */}
//         <div
//           className={`relative flex flex-col md:flex-row items-center ${animClass}`}
//         >
//           {/* LEFT IMAGE */}
//           <div className="relative z-20 w-full md:w-[38%]">
//             <div className="relative w-full h-[340px] md:h-[380px] rounded-b-[200px] overflow-hidden bg-amber-700 shadow-lg">
//               <img
//                 src={t.image}
//                 alt={t.name}
//                 className="w-full h-full object-cover object-[center_20%]"
//                 loading="lazy"
//               />

//               {/* Rating Badge */}
//               <div className="absolute top-0 left-0 w-[72px] h-[72px] bg-teal-800 rounded-br-3xl flex items-center justify-center text-white">
//                 <div className="flex items-center gap-1 text-sm font-bold">
//                   <span className="text-amber-400">★</span>
//                   <span>{t.rating.toFixed(1)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="relative w-full md:flex-1 md:-ml-20 lg:-ml-24 z-10">
//             <div className="bg-[#f9f2e0] rounded-r-3xl rounded-l-2xl pl-24 md:pl-28 lg:pl-32 pr-6 md:pr-10 py-8 md:py-10 min-h-[340px] md:min-h-[380px] flex flex-col justify-center shadow-sm">
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
//                 “{t.quote}”
//               </p>

//               <div className="flex items-end justify-between gap-4">
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
//                     {t.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 font-medium">{t.role}</p>
//                 </div>

//                 <svg
//                   className="w-12 h-10 text-teal-800 opacity-50 flex-shrink-0"
//                   viewBox="0 0 70 60"
//                   fill="none"
//                 >
//                   <path
//                     d="M16 52C29 46 37 34 37 22C37 13 33 6 28 2C16 10 9 18 7 29C5 40 8 48 16 52Z"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                   />
//                   <path
//                     d="M43 52C56 46 64 34 64 22C64 13 60 6 55 2C43 10 36 18 34 29C32 40 35 48 43 52Z"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom controls – navigation + progress + scroll top */}
//         <div className="flex flex-wrap items-center justify-between gap-4 mt-7 px-3">
//           <div className="flex gap-2">
//             <button
//               onClick={prev}
//               className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center cursor-pointer text-gray-700 transition-all hover:bg-teal-800 hover:border-teal-800 hover:text-white hover:scale-105"
//               aria-label="Previous"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.2"
//                 width="18"
//                 height="18"
//               >
//                 <path
//                   d="M19 12H5M12 5l-7 7 7 7"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={next}
//               className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center cursor-pointer text-gray-700 transition-all hover:bg-teal-800 hover:border-teal-800 hover:text-white hover:scale-105"
//               aria-label="Next"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.2"
//                 width="18"
//                 height="18"
//               >
//                 <path
//                   d="M5 12h14M12 5l7 7-7 7"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-2xl md:text-[26px] font-semibold text-teal-800 leading-none min-w-[36px] text-right">
//               {padded}
//             </span>
//             <div className="w-32 md:w-[150px] h-[3px] bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-amber-500 transition-all duration-400"
//                 style={{ width: `${progressPct}%` }}
//               />
//             </div>
//             <span className="text-sm md:text-base text-gray-400 font-medium">
//               {paddedTotal}
//             </span>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop&crop=face",
    name: "Mustafa Kamal",
    role: "CEO, Founder",
    rating: 4.0,
    quote:
      "Stay informed about our upcoming events and campaigns. Whether it's a fundraising gala, a charity run, or a community outreach program, there are plenty of ways to get involved and support our cause. Our donation process uses the latest encryption technology.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Program Director",
    rating: 4.8,
    quote:
      "Working with this foundation has been a life-changing experience. The team is incredibly dedicated and every donation truly makes a tangible difference in the communities we serve.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop&crop=face",
    name: "Alex Fernandes",
    role: "Volunteer Lead",
    rating: 4.5,
    quote:
      "The programs are thoughtfully designed and the staff genuinely cares about outcomes. Our clean water initiative alone has brought safe drinking water to hundreds of families.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop&crop=face",
    name: "Sneha Patel",
    role: "Community Partner",
    rating: 5.0,
    quote:
      "The Gram Ekta Foundation has transformed our village in ways we never imagined possible. Every initiative has created lasting change.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animClass, setAnimClass] = useState("");
  const busy = useRef(false);

  const total = testimonials.length;
  const t = testimonials[current];

  const slide = (nextIdx, direction) => {
    if (busy.current) return;
    busy.current = true;

    const outClass = direction === "right" ? "t-out-left" : "t-out-right";
    const inClass = direction === "right" ? "t-in-right" : "t-in-left";

    setAnimClass(outClass);
    setTimeout(() => {
      setCurrent(nextIdx);
      setAnimClass(inClass);
      setTimeout(() => {
        setAnimClass("");
        busy.current = false;
      }, 300);
    }, 180);
  };

  const prev = () => slide((current - 1 + total) % total, "left");
  const next = () => slide((current + 1) % total, "right");

  const padded = String(current + 1).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");
  const progressPct = ((current + 1) / total) * 100;

  return (
    <section className="w-full bg-white font-['Inter',system-ui,sans-serif] py-10 sm:py-12 md:py-16">
      {/* Custom keyframe animations – Tailwind doesn't have these built‑in */}
      <style>{`
        @keyframes tInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes tOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(40px); }
        }

        .t-in-right { animation: tInRight 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .t-in-left  { animation: tInLeft  0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .t-out-left  { animation: tOutLeft  0.18s ease both; }
        .t-out-right { animation: tOutRight 0.18s ease both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        {/* Two‑column flex layout */}
        <div
          className={`relative flex flex-col md:flex-row items-stretch ${animClass}`}
        >
          {/* LEFT IMAGE */}
          <div className="relative z-20 w-full md:w-[38%] flex-shrink-0">
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[380px] rounded-b-[120px] sm:rounded-b-[160px] md:rounded-b-[200px] overflow-hidden bg-amber-700 shadow-lg">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover object-[center_20%]"
                loading="lazy"
              />

              {/* Rating Badge */}
              <div className="absolute top-0 left-0 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] bg-teal-800 rounded-br-3xl flex items-center justify-center text-white">
                <div className="flex items-center gap-1 text-xs sm:text-sm font-bold">
                  <span className="text-amber-400">★</span>
                  <span>{t.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative w-full md:flex-1 -mt-6 sm:-mt-8 md:mt-0 md:-ml-20 lg:-ml-24 z-10">
            <div className="bg-[#f9f2e0] rounded-2xl md:rounded-r-3xl md:rounded-l-2xl px-5 pt-10 pb-7 sm:px-8 sm:pt-12 sm:pb-8 md:pl-28 lg:pl-32 md:pr-10 md:py-10 min-h-[200px] sm:min-h-[240px] md:min-h-[380px] flex flex-col justify-center shadow-sm">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">{t.role}</p>
                </div>

                <svg
                  className="w-8 h-7 sm:w-10 sm:h-8 md:w-12 md:h-10 text-teal-800 opacity-50 flex-shrink-0"
                  viewBox="0 0 70 60"
                  fill="none"
                >
                  <path
                    d="M16 52C29 46 37 34 37 22C37 13 33 6 28 2C16 10 9 18 7 29C5 40 8 48 16 52Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M43 52C56 46 64 34 64 22C64 13 60 6 55 2C43 10 36 18 34 29C32 40 35 48 43 52Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 md:mt-7 px-2 sm:px-3">
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center cursor-pointer text-gray-700 transition-all hover:bg-teal-800 hover:border-teal-800 hover:text-white hover:scale-105"
              aria-label="Previous"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                width="18"
                height="18"
              >
                <path
                  d="M19 12H5M12 5l-7 7 7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center cursor-pointer text-gray-700 transition-all hover:bg-teal-800 hover:border-teal-800 hover:text-white hover:scale-105"
              aria-label="Next"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                width="18"
                height="18"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl md:text-[26px] font-semibold text-teal-800 leading-none min-w-[36px] text-right">
              {padded}
            </span>
            <div className="w-24 sm:w-32 md:w-[150px] h-[3px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-400"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-sm md:text-base text-gray-400 font-medium">
              {paddedTotal}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}