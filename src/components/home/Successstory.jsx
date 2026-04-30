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

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import certImage from "../../assets/image.png";
import certImage2 from "../../assets/image copy.png";

const SuccessStory = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-0 -mb-6 lg:-mb-12 px-4 overflow-hidden relative">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* ── NEW: CERTIFICATES GALLERY ── */}
        <div className="w-full flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-yellow-500 text-lg sm:text-xl font-semibold italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Our Certifications
            </span>
            <span className="block w-12 sm:w-16 h-px bg-yellow-400" />
          </div>
          <h2 className="text-gray-900 font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Our Achievements & Recognitions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg">
            We are proud to be recognized for our dedication and impact. Here are some of the certificates that validate our transparency and commitment.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto w-full">
          {[certImage, certImage2].map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="w-full group relative cursor-pointer bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center h-auto min-h-[250px]"
            >
              <img
                src={img}
                alt={`Certificate ${index + 1}`}
                className="w-full h-auto max-h-[380px] object-contain rounded-xl"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-3xl">
                <div className="bg-white/30 p-4 rounded-full backdrop-blur-md shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── OLD CONTENT (COMMENTED OUT AS REQUESTED) ── */}
        {/*
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 mt-20">
          <div className="flex-1 min-w-0 max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500 text-base font-semibold italic" style={{ fontFamily: "'Georgia', serif" }}>
                Success Story
              </span>
              <span className="block w-10 h-px bg-yellow-400" />
            </div>
            <h2 className="text-gray-900 font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}>
              We Help Fellow<br />Nonprofits Access<br />The Funding Tools,<br />Training
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 sm:mb-10 max-w-sm">
              Our secure online donation platform allows you to make contributions quickly and safely.
              Choose from various payment methods and set up one-time.exactly.
            </p>
            <button onClick={() => navigate("/success-story")} className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200">
              Our Success Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>
          <div className="relative flex-shrink-0 w-full lg:w-[560px] flex items-start pb-16 sm:pb-16 lg:pb-14">
            <div className="absolute -top-6 right-0 pointer-events-none select-none z-0">
              <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-48 sm:w-72 sm:h-64 opacity-20">
                <path d="M60 150 C40 80, 100 20, 180 30 C260 40, 320 100, 310 180 C300 260, 220 290, 150 270 C80 250, 80 220, 60 150Z" fill="#9ca3af" />
                <path d="M280 50 C300 30, 330 40, 335 70 C325 65, 300 60, 280 50Z" fill="#9ca3af" />
              </svg>
            </div>
            <div className="absolute -bottom-4 right-4 pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-12 sm:w-48 sm:h-16 opacity-15">
                <path d="M10 50 C40 30, 90 60, 140 40 C170 28, 190 45, 200 40 L200 80 L0 80Z" fill="#9ca3af" />
              </svg>
            </div>
            <div className="flex flex-col items-center mr-3 sm:mr-6 mt-4 z-10">
              <div className="text-xs font-semibold text-gray-500 mb-1 tracking-widest" style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)", letterSpacing: "0.15em" }}>
                <span className="text-yellow-500">Years of</span>
                <span className="text-gray-800 font-extrabold text-sm"> Experience</span>
              </div>
              <span className="text-gray-800 font-extrabold leading-none mt-3" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1 }}>16</span>
            </div>
            <div className="relative flex-1 z-10">
              <div className="rounded-3xl overflow-hidden shadow-xl w-full">
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80&fit=crop" alt="Success story children" className="w-full h-52 sm:h-64 lg:h-72 object-cover object-center" />
              </div>
              <div className="absolute -bottom-14 left-0 w-56 sm:w-64 bg-white rounded-2xl shadow-xl p-4 sm:p-5 z-20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900 font-bold text-sm sm:text-base">Adam Cruz</span>
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
        */}
      </div>

      {/* ── FULLSCREEN LIGHTBOX MODAL ── */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center animate-[fadeIn_0.3s_ease]">
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 sm:top-6 sm:right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 p-2 md:p-3 rounded-full transition-all duration-200 z-[1010]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close fullscreen"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage} 
              alt="Certificate Fullscreen" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-100 transition-transform duration-300" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
      
      {/* Styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default SuccessStory;