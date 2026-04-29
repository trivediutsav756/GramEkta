// import { useNavigate } from "react-router-dom";

// const SuccessStory = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full bg-white py-20 px-4 overflow-hidden">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

//         {/* ── LEFT: Text Content ── */}
//         <div className="flex-1 min-w-0 max-w-lg">
//           {/* Tag */}
//           <div className="flex items-center gap-2 mb-4">
//             <span
//               className="text-yellow-500 text-base font-semibold italic"
//               style={{ fontFamily: "'Georgia', serif" }}
//             >
//               Success Story
//             </span>
//             <span className="block w-10 h-px bg-yellow-400" />
//           </div>

//           {/* Heading */}
//           <h2
//             className="text-gray-900 font-extrabold leading-tight mb-5"
//             style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
//           >
//             We Help Fellow
//             <br />
//             Nonprofits Access
//             <br />
//             The Funding Tools,
//             <br />
//             Training
//           </h2>

//           {/* Description */}
//           <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
//             Our secure online donation platform allows you to make contributions quickly and safely.
//             Choose from various payment methods and set up one-time.exactly.
//           </p>

//           {/* CTA Button */}
//           <button
//             onClick={() => navigate("/success-story")}
//             className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200"
//           >
//             Our Success Story
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
//             </svg>
//           </button>
//         </div>

//         {/* ── RIGHT: Experience + Image + Testimonial ── */}
//         <div className="relative flex-shrink-0 w-full lg:w-[560px] flex items-start">

//           {/* Gray paint splash background — top right area */}
//           <div className="absolute -top-6 right-0 pointer-events-none select-none z-0">
//             <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-64 opacity-20">
//               <path
//                 d="M60 150 C40 80, 100 20, 180 30 C260 40, 320 100, 310 180 C300 260, 220 290, 150 270 C80 250, 80 220, 60 150Z"
//                 fill="#9ca3af"
//               />
//               <path
//                 d="M280 50 C300 30, 330 40, 335 70 C325 65, 300 60, 280 50Z"
//                 fill="#9ca3af"
//               />
//             </svg>
//           </div>

//           {/* Gray paint splash — bottom right */}
//           <div className="absolute -bottom-4 right-4 pointer-events-none select-none z-0">
//             <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-16 opacity-15">
//               <path
//                 d="M10 50 C40 30, 90 60, 140 40 C170 28, 190 45, 200 40 L200 80 L0 80Z"
//                 fill="#9ca3af"
//               />
//             </svg>
//           </div>

//           {/* Experience vertical label + number */}
//           <div className="flex flex-col items-center mr-6 mt-4 z-10">
//             {/* Vertical text */}
//             <div
//               className="text-xs font-semibold text-gray-500 mb-1 tracking-widest"
//               style={{
//                 writingMode: "vertical-rl",
//                 textOrientation: "mixed",
//                 transform: "rotate(180deg)",
//                 letterSpacing: "0.15em",
//               }}
//             >
//               <span className="text-yellow-500">Years of</span>
//               <span className="text-gray-800 font-extrabold text-sm"> Experience</span>
//             </div>
//             {/* Big number */}
//             <span
//               className="text-gray-800 font-extrabold leading-none mt-3"
//               style={{ fontSize: "5rem", lineHeight: 1 }}
//             >
//               16
//             </span>
//           </div>

//           {/* Image + testimonial card stacked */}
//           <div className="relative flex-1 z-10">
//             {/* Main photo */}
//             <div className="rounded-3xl overflow-hidden shadow-xl w-full">
//               <img
//                 src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80&fit=crop"
//                 alt="Success story children"
//                 className="w-full h-72 object-cover object-center"
//               />
//             </div>

//             {/* Testimonial card — overlapping bottom-left of image */}
//             <div className="absolute -bottom-12 left-0 w-64 bg-white rounded-2xl shadow-xl p-5 z-20">
//               {/* Name + quote icon */}
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-gray-900 font-bold text-base">Adam Cruz</span>
//                 {/* Yellow double-quote */}
//                 <span className="text-yellow-400 text-3xl font-serif leading-none">"</span>
//               </div>
//               <p className="text-gray-500 text-xs leading-relaxed">
//                 Our success stories highlight the real life impact of your donations &amp; the
//                 resilience of those we help. These narratives showcase the power of compassion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStory;

import { useNavigate } from "react-router-dom";

const SuccessStory = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 min-w-0 max-w-lg">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-yellow-500 text-base font-semibold italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Success Story
            </span>
            <span className="block w-10 h-px bg-yellow-400" />
          </div>

          {/* Heading */}
          <h2
            className="text-gray-900 font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
          >
            We Help Fellow
            <br />
            Nonprofits Access
            <br />
            The Funding Tools,
            <br />
            Training
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 sm:mb-10 max-w-sm">
            Our secure online donation platform allows you to make contributions quickly and safely.
            Choose from various payment methods and set up one-time.exactly.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/success-story")}
            className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Our Success Story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </div>

        {/* ── RIGHT: Experience + Image + Testimonial ── */}
        <div className="relative flex-shrink-0 w-full lg:w-[560px] flex items-start pb-16 sm:pb-16 lg:pb-14">

          {/* Gray paint splash background — top right area */}
          <div className="absolute -top-6 right-0 pointer-events-none select-none z-0">
            <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-48 sm:w-72 sm:h-64 opacity-20">
              <path
                d="M60 150 C40 80, 100 20, 180 30 C260 40, 320 100, 310 180 C300 260, 220 290, 150 270 C80 250, 80 220, 60 150Z"
                fill="#9ca3af"
              />
              <path
                d="M280 50 C300 30, 330 40, 335 70 C325 65, 300 60, 280 50Z"
                fill="#9ca3af"
              />
            </svg>
          </div>

          {/* Gray paint splash — bottom right */}
          <div className="absolute -bottom-4 right-4 pointer-events-none select-none z-0">
            <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-12 sm:w-48 sm:h-16 opacity-15">
              <path
                d="M10 50 C40 30, 90 60, 140 40 C170 28, 190 45, 200 40 L200 80 L0 80Z"
                fill="#9ca3af"
              />
            </svg>
          </div>

          {/* Experience vertical label + number */}
          <div className="flex flex-col items-center mr-3 sm:mr-6 mt-4 z-10">
            {/* Vertical text */}
            <div
              className="text-xs font-semibold text-gray-500 mb-1 tracking-widest"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                letterSpacing: "0.15em",
              }}
            >
              <span className="text-yellow-500">Years of</span>
              <span className="text-gray-800 font-extrabold text-sm"> Experience</span>
            </div>
            {/* Big number */}
            <span
              className="text-gray-800 font-extrabold leading-none mt-3"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1 }}
            >
              16
            </span>
          </div>

          {/* Image + testimonial card stacked */}
          <div className="relative flex-1 z-10">
            {/* Main photo */}
            <div className="rounded-3xl overflow-hidden shadow-xl w-full">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80&fit=crop"
                alt="Success story children"
                className="w-full h-52 sm:h-64 lg:h-72 object-cover object-center"
              />
            </div>

            {/* Testimonial card — overlapping bottom of image */}
            <div className="absolute -bottom-14 left-0 w-56 sm:w-64 bg-white rounded-2xl shadow-xl p-4 sm:p-5 z-20">
              {/* Name + quote icon */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-900 font-bold text-sm sm:text-base">Adam Cruz</span>
                {/* Yellow double-quote */}
                <span className="text-yellow-400 text-3xl font-serif leading-none">"</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Our success stories highlight the real life impact of your donations &amp; the
                resilience of those we help. These narratives showcase the power of compassion.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStory;