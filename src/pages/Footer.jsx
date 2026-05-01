// import React from "react";

// export default function Footer() {
//   return (
//     <footer
//       style={{ fontFamily: "'Nunito', sans-serif", background: "#0d2820" }}
//     >
//       {/* ── Newsletter ── */}
//       <div className="relative flex items-center justify-between px-16 py-9 border-b border-white/10 overflow-hidden">
//         {/* Left blob deco */}
//         <svg
//           className="absolute left-0 top-0 w-32 opacity-90"
//           viewBox="0 0 140 180"
//         >
//           <path
//             d="M0 0 Q40 60 10 120 Q-10 160 30 180 L0 180Z"
//             fill="#f0a500"
//             opacity="0.9"
//           />
//           <path
//             d="M30 0 Q80 40 60 100 Q45 140 70 170 L140 170 L140 0Z"
//             fill="#d4920a"
//             opacity="0.5"
//           />
//         </svg>
//         {/* Right dot deco */}
//         <div className="absolute right-4 top-2 flex flex-col gap-1">
//           {[0, 1, 2].map((r) => (
//             <div key={r} className="flex gap-1">
//               {[0, 1, 2].map((c) => (
//                 <div key={c} className="w-1.5 h-1.5 rounded-full bg-teal-700" />
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className="z-10">
//           <h2 className="text-white text-2xl font-extrabold mb-1">
//             Subscribe To Our Newsletter
//           </h2>
//           <p className="text-gray-400 text-sm">
//             Regular inspections and feedback mechanisms
//           </p>
//         </div>

//         <div className="flex items-center gap-3 z-10">
//           <input
//             type="email"
//             placeholder="Enter Email Address"
//             className="bg-white rounded-full px-6 py-3.5 text-sm w-80 outline-none text-gray-700 placeholder-gray-400"
//           />
//           <button
//             className="bg-yellow-500 hover:bg-yellow-600 rounded-full w-13 h-13 flex items-center justify-center transition-colors"
//             style={{ width: 52, height: 52 }}
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
//               <path d="M2 21L23 12 2 3v7l15 2-15 2z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* ── Footer Body ── */}
//       <div className="grid grid-cols-4 gap-10 px-16 py-14">
//         {/* Brand */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <svg width="32" height="32" viewBox="0 0 32 32">
//               <rect width="32" height="32" rx="6" fill="#1a5c48" />
//               <path
//                 d="M8 24 L8 8 L18 8 Q26 8 26 16 Q26 24 18 24Z"
//                 fill="#f0a500"
//               />
//               <path
//                 d="M12 20 L12 12 L18 12 Q22 12 22 16 Q22 20 18 20Z"
//                 fill="#fff"
//               />
//             </svg>
//             <span className="text-white text-2xl font-extrabold">Donat</span>
//           </div>
//           <p className="text-[#8aabb0] text-sm leading-relaxed mb-6">
//             Our secure online donation platform allows you to make contributions
//             quickly and safely. Choose from various.
//           </p>
//           <button className="flex items-center gap-2 bg-[#1a4a3a] text-white rounded-full px-7 py-3.5 text-sm font-bold hover:bg-[#225a48] transition-colors">
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="#f0a500">
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//             </svg>
//             Donate Now
//           </button>
//         </div>

//         {/* Quick Links */}
//         <LinkCol
//           title="Quick Links"
//           links={[
//             "About Us",
//             "Our News",
//             "Our Campaign",
//             "Privacy policy",
//             "Contact Us",
//           ]}
//         />

//         {/* Our Service */}
//         <LinkCol
//           title="Our Service"
//           links={[
//             "Give Donation",
//             "Education Support",
//             "Food Support",
//             "Health Support",
//             "Our Campaign",
//           ]}
//         />

//         {/* Contact Us */}
//         <div className="flex gap-3 items-start">
//           <div className="bg-[#153828] rounded-2xl p-7 flex-1">
//             <h3 className="text-white text-lg font-extrabold mb-6">
//               Contact Us
//             </h3>

//             <div className="flex items-start gap-3 mb-5">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="#8aabb0">
//                 <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//               </svg>
//               <div>
//                 <p className="text-[#8aabb0] text-xs mb-1">Call us any time:</p>
//                 <p className="text-white font-bold text-sm">+163-3654-7896</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="#8aabb0">
//                 <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//               </svg>
//               <div>
//                 <p className="text-[#8aabb0] text-xs mb-1">
//                   Email us any time:
//                 </p>
//                 <p className="text-white font-bold text-sm">info@donat.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Social icons */}
//           <div className="flex flex-col gap-2.5 mt-1">
//             {[
//               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
//               <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
//               <>
//                 <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
//               </>,
//               <>
//                 <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//                 <circle cx="4" cy="4" r="2" />
//               </>,
//             ].map((icon, i) => (
//               <button
//                 key={i}
//                 className="w-10 h-10 rounded-full bg-white hover:bg-yellow-500 flex items-center justify-center transition-colors group"
//               >
//                 <svg
//                   width="15"
//                   height="15"
//                   viewBox="0 0 24 24"
//                   fill="#222"
//                   className="group-hover:fill-white transition-colors"
//                 >
//                   {icon}
//                 </svg>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom Bar ── */}
//       <div className="relative bg-[#1a5c48] py-4 text-center">
//         <p className="text-[#cdd] text-sm">
//           © Copyright 2025{" "}
//           <span className="text-yellow-400 font-bold">Donat.</span> All Rights
//           Reserved.
//         </p>

//       </div>
//     </footer>
//   );
// }

// /* Reusable link column */
// function LinkCol({ title, links }) {
//   return (
//     <div>
//       <h3 className="text-white text-base font-extrabold mb-2">{title}</h3>
//       <div className="w-11 h-0.5 bg-yellow-500 rounded mb-5" />
//       <ul className="flex flex-col gap-3.5">
//         {links.map((link) => (
//           <li key={link} className="flex items-center gap-2">
//             <span className="text-yellow-400 font-bold text-sm">↗</span>
//             <a
//               href="#"
//               className="text-[#cdd] text-sm hover:text-yellow-400 transition-colors"
//             >
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";
import logo from "../assets/logo.jpeg";
 
export default function Footer() {
  return (
    <footer className="relative bg-[#061812] font-inter">
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
 
        {/* ── Footer Body (4 Columns) ── */}
        <div className="py-16 flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
         
          {/* Column 1: Brand */}
          <div className="lg:w-[25%] flex flex-col items-start">
            <div className="mb-6 inline-block">
              <img src={logo} alt="Gram Ekta Logo" className="h-20 sm:h-24 object-contain" />
            </div>
            <p className="text-[#8aabb0] text-[15px] leading-[1.8] mb-8 pr-4">
              Our secure online donation platform allows you to make contributions
              quickly and safely. Choose from various.
            </p>
            <button className="flex items-center gap-2 bg-[#124a3c] text-white rounded-full px-7 py-3.5 text-sm font-bold hover:bg-[#176b5c] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#eda726">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Donate Now
            </button>
          </div>
 
          {/* Column 2: Quick Links */}
          <div className="lg:w-[15%] pt-2">
            <LinkCol
              title="Quick Links"
              links={[
                "About Us",
                "Our News",
                "Our Campaign",
                "Privacy policy",
                "Contact Us",
              ]}
            />
          </div>
 
          {/* Column 3: Our Service */}
          <div className="lg:w-[15%] pt-2">
            <LinkCol
              title="Our Service"
              links={[
                "Give Donation",
                "Education Support",
                "Food Support",
                "Health Support",
                "Our Campaign",
              ]}
            />
          </div>
 
          {/* Column 4: Contact Us + Social */}
          <div className="lg:w-[35%] flex flex-col sm:flex-row gap-5 items-stretch pt-2">
            <div className="bg-[#122e23] rounded-3xl p-8 flex-1 w-full border border-white/5">
              <h3 className="text-white text-xl font-bold mb-7">
                Contact Us
              </h3>
 
              <div className="flex items-start gap-4 mb-7">
                <div className="mt-1">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8aabb0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                   </svg>
                </div>
                <div>
                  <p className="text-[#8aabb0] text-[13px] mb-1 font-medium">Call us any time:</p>
                  <p className="text-white font-bold text-base tracking-wide">+163-3654-7896</p>
                </div>
              </div>
 
              <div className="flex items-start gap-4">
                <div className="mt-1">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8aabb0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                   </svg>
                </div>
                <div>
                  <p className="text-[#8aabb0] text-[13px] mb-1 font-medium">
                    Email us any time:
                  </p>
                  <p className="text-white font-bold text-base tracking-wide">info@donat.com</p>
                </div>
              </div>
            </div>
 
            {/* Social icons */}
            <div className="flex flex-row sm:flex-col gap-3 justify-center">
              {[
                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
                 <>
                   <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                 </>,
                 <>
                   <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                   <circle cx="4" cy="4" r="2" />
                 </>,
              ].map((icon, i) => (
                <button
                  key={i}
                  className="w-[46px] h-[46px] rounded-full bg-white hover:bg-[#eda726] flex items-center justify-center transition-colors group shadow-sm flex-shrink-0"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-[#181818] group-hover:text-white transition-colors"
                  >
                    {icon}
                  </svg>
                </button>
              ))}
            </div>
          </div>
 
        </div>
      </div>
 
      {/* ── Bottom Bar ── */}
      <div className="bg-[#176b5c] py-5 px-6 text-center relative z-20">
        <p className="text-white text-sm font-medium">
          © Copyright 2026{" "}
          <span className="text-[#eda726] font-bold">Donat.</span> All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
 
/* Reusable link column */
function LinkCol({ title, links }) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold mb-7">{title}</h3>
      <ul className="flex flex-col gap-[18px]">
        {links.map((link) => (
          <li key={link} className="flex items-center gap-3 group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#eda726" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0">
               <line x1="7" y1="17" x2="17" y2="7"></line>
               <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <a
              href="#"
              className="text-[#8aabb0] text-[15px] hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}