// import { useEffect, useRef } from "react";
// import logo from '../assets/logo.jpeg'

// /* ── tiny fade-in-up hook ── */
// function useFadeIn() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("gef-visible");
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.15 },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return ref;
// }

// const pillars = [
//   {
//     icon: "💧",
//     title: "Clean Water",
//     desc: "Providing safe drinking water and STP plant solutions to underserved rural communities.",
//   },
//   {
//     icon: "📚",
//     title: "Education",
//     desc: "Building schools, digital classrooms and scholarships that open doors for every child.",
//   },
//   {
//     icon: "🌾",
//     title: "Agriculture",
//     desc: "Modern farming techniques, micro-irrigation and crop support for small-scale farmers.",
//   },
//   {
//     icon: "☀️",
//     title: "Renewable Energy",
//     desc: "Solar electrification and clean-energy projects that power homes and livelihoods.",
//   },
//   {
//     icon: "🏥",
//     title: "Public Welfare",
//     desc: "Health camps, hygiene drives and community welfare programmes across urban and rural India.",
//   },
//   {
//     icon: "🌳",
//     title: "Rural Development",
//     desc: "Infrastructure, sanitation and skill-building that transform villages into thriving communities.",
//   },
// ];

// const stats = [
//   { value: "12+", label: "Years of Service" },
//   { value: "500+", label: "Villages Reached" },
//   { value: "1L+", label: "Lives Impacted" },
//   { value: "80+", label: "Active Projects" },
// ];

// export default function About() {
//   const heroRef = useFadeIn();
//   const missionRef = useFadeIn();
//   const pillarsRef = useFadeIn();
//   const statsRef = useFadeIn();
//   const valuesRef = useFadeIn();

//   return (
//     <>
//       {/* ── global styles ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&display=swap');

//         .gef-fade { opacity: 0; transform: translateY(32px); transition: opacity 0.75s ease, transform 0.75s ease; }
//         .gef-fade.gef-visible { opacity: 1; transform: translateY(0); }
//         .gef-fade > * { transition-delay: calc(var(--i, 0) * 0.1s); }

//         .pillar-card:hover .pillar-icon { transform: scale(1.18) rotate(-6deg); }
//         .pillar-icon { transition: transform 0.3s ease; display: inline-block; }

//         .stat-num {
//           background: linear-gradient(135deg, #f0a500 0%, #16a34a 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .leaf-bg {
//           background-image: radial-gradient(ellipse 60% 50% at 80% 30%, rgba(22,163,74,0.08) 0%, transparent 70%),
//                             radial-gradient(ellipse 40% 60% at 10% 80%, rgba(240,165,0,0.06) 0%, transparent 70%);
//         }
//       `}</style>

//       <main
//         style={{
//           fontFamily: "'Source Serif 4', Georgia, serif",
//           background: "#fafaf7",
//         }}
//       >
//         {/* ════════════════════════════════
//             HERO — dark green, matches slide
//         ════════════════════════════════ */}
//         <section
//           ref={heroRef}
//           className="gef-fade relative overflow-hidden"
//           style={{
//             background:
//               "linear-gradient(135deg, #0d3d2a 0%, #1a5c3a 60%, #0f4a30 100%)",
//             minHeight: "88vh",
//           }}
//         >
//           {/* faint India-map watermark */}
//           <div
//             className="absolute inset-0 pointer-events-none select-none opacity-[0.04]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cpath d='M200 40 C240 45 290 70 310 110 C330 150 320 200 300 240 C280 280 310 310 290 360 C270 400 230 420 200 430 C170 420 130 400 110 360 C90 310 120 280 100 240 C80 200 70 150 90 110 C110 70 160 45 200 40Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "right 5% center",
//               backgroundSize: "340px",
//             }}
//           />

//           {/* subtle dot grid */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
//               backgroundSize: "28px 28px",
//             }}
//           />

//           <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//             {/* LEFT text */}
//             <div className="flex-1 min-w-0">
//               {/* Gold label pill — matching slide */}
//               <div className="inline-block mb-6">
//                 <span
//                   className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.22em] px-5 py-2"
//                   style={{ background: "#c8860a", letterSpacing: "0.22em" }}
//                 >
//                   GRAM EKTA FOUNDATION
//                 </span>
//               </div>

//               <h1
//                 className="text-white font-black leading-[1.05] mb-4"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(2.6rem, 6vw, 5rem)",
//                 }}
//               >
//                 Building
//                 <br />
//                 Communities,
//               </h1>
//               <h1
//                 className="font-black leading-[1.05] mb-8"
//                 style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontSize: "clamp(2.6rem, 6vw, 5rem)",
//                   color: "#4ade80",
//                 }}
//               >
//                 Transforming Lives
//               </h1>

//               <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
//                 A non-profit organisation dedicated to rural &amp; urban
//                 development, clean water, STP Plant, education, agriculture,
//                 renewable energy &amp; public welfare.
//               </p>

//               {/* divider line */}
//               <div
//                 className="w-48 h-px mb-6"
//                 style={{ background: "#c8860a" }}
//               />

//               {/* tagline */}
//               <p
//                 className="text-sm sm:text-base italic"
//                 style={{
//                   color: "#c8860a",
//                   fontFamily: "'Playfair Display', serif",
//                 }}
//               >
//                 Unity &nbsp;•&nbsp; Service &nbsp;•&nbsp; Progress
//               </p>
//             </div>

//             {/* RIGHT logo card with image */}
//             <div className="flex-shrink-0 w-72 sm:w-80 lg:w-[340px]">
//               <div className="bg-white rounded-2xl shadow-2xl p-6 flex items-center justify-center">
//                 <img
//                   src={logo} // or import if inside src folder
//                   alt="Gram Ekta Foundation Logo"
//                   className="w-full max-w-[220px] object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* bottom wave */}
//           <div className="absolute bottom-0 left-0 right-0">
//             <svg
//               viewBox="0 0 1440 60"
//               preserveAspectRatio="none"
//               className="w-full"
//               style={{ height: "50px", display: "block" }}
//             >
//               <path
//                 d="M0 60 L0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 Z"
//                 fill="#fafaf7"
//               />
//             </svg>
//           </div>
//         </section>

//         {/* ════════════════════════════════
//             MISSION
//         ════════════════════════════════ */}
//         <section
//           ref={missionRef}
//           className="gef-fade leaf-bg py-20 sm:py-28 px-6 sm:px-10 lg:px-16"
//         >
//           <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
//             {/* Left quote block */}
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center gap-3 mb-5">
//                 <span
//                   className="w-10 h-1 rounded-full"
//                   style={{ background: "#c8860a" }}
//                 />
//                 <span
//                   className="text-xs font-bold uppercase tracking-widest"
//                   style={{ color: "#c8860a" }}
//                 >
//                   Our Mission
//                 </span>
//               </div>
//               <h2
//                 className="font-black leading-tight mb-6 text-gray-900"
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
//                 }}
//               >
//                 Empowering India,
//                 <br />
//                 <span style={{ color: "#1a5c3a" }}>One Village at a Time</span>
//               </h2>
//               <p
//                 className="text-gray-600 leading-relaxed mb-6 max-w-lg"
//                 style={{ fontSize: "1rem" }}
//               >
//                 Gram Ekta Foundation was established with a singular purpose —
//                 to bridge the gap between aspiration and opportunity for
//                 millions of Indians living in rural and semi-urban areas. We
//                 believe that sustainable development begins at the grassroots,
//                 with communities that are heard, equipped and empowered.
//               </p>
//               <p
//                 className="text-gray-600 leading-relaxed max-w-lg"
//                 style={{ fontSize: "1rem" }}
//               >
//                 From building clean water infrastructure and STP plants to
//                 enabling modern agriculture and renewable energy adoption, every
//                 programme we run is designed to create long-lasting,
//                 self-sufficient change — not just relief.
//               </p>
//             </div>

//             {/* Right vision block */}
//             <div className="flex-shrink-0 w-full lg:w-[420px]">
//               <div
//                 className="rounded-3xl p-8 sm:p-10"
//                 style={{
//                   background: "linear-gradient(145deg, #0d3d2a, #1a5c3a)",
//                 }}
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <span className="w-8 h-1 rounded-full bg-yellow-400" />
//                   <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
//                     Our Vision
//                   </span>
//                 </div>
//                 <p
//                   className="text-white leading-relaxed mb-8 text-sm sm:text-base"
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                     fontStyle: "italic",
//                     fontSize: "1.05rem",
//                   }}
//                 >
//                   "A self-reliant, equitable and compassionate India where every
//                   citizen — regardless of geography or background — has access
//                   to clean water, quality education, healthcare and a dignified
//                   livelihood."
//                 </p>
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
//                     style={{ background: "#c8860a" }}
//                   >
//                     🌱
//                   </div>
//                   <div>
//                     <p className="text-white font-bold text-sm">
//                       Sundar Lal Verma
//                     </p>
//                     <p className="text-gray-400 text-xs">
//                       Founder &amp; Chairman, GEF
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════════
//             STATS BAND
//         ════════════════════════════════ */}
//         <section
//           ref={statsRef}
//           className="gef-fade py-14 sm:py-16 px-6"
//           style={{ background: "#0d3d2a" }}
//         >
//           <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {stats.map((s, i) => (
//               <div key={s.label} style={{ "--i": i }}>
//                 <p
//                   className="stat-num font-black mb-1"
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                     fontSize: "clamp(2rem, 5vw, 3rem)",
//                   }}
//                 >
//                   {s.value}
//                 </p>
//                 <p className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
//                   {s.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ════════════════════════════════
//             PILLARS / FOCUS AREAS
//         ════════════════════════════════ */}
//         <section
//           ref={pillarsRef}
//           className="gef-fade py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white"
//         >
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-14">
//               <div className="flex items-center justify-center gap-3 mb-4">
//                 <span className="w-10 h-px" style={{ background: "#c8860a" }} />
//                 <span
//                   className="text-xs font-bold uppercase tracking-widest"
//                   style={{ color: "#c8860a" }}
//                 >
//                   What We Do
//                 </span>
//                 <span className="w-10 h-px" style={{ background: "#c8860a" }} />
//               </div>
//               <h2
//                 className="text-gray-900 font-black leading-tight"
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
//                 }}
//               >
//                 Our Focus Areas
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//               {pillars.map((p, i) => (
//                 <div
//                   key={p.title}
//                   className="pillar-card rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                   style={{
//                     "--i": i,
//                     background: i % 2 === 0 ? "#fafaf7" : "#fff",
//                   }}
//                 >
//                   <div className="pillar-icon text-3xl mb-4">{p.icon}</div>
//                   <h3
//                     className="font-bold text-gray-900 mb-2"
//                     style={{
//                       fontFamily: "'Playfair Display', serif",
//                       fontSize: "1.1rem",
//                     }}
//                   >
//                     {p.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {p.desc}
//                   </p>
//                   <div
//                     className="mt-5 w-10 h-0.5 rounded-full"
//                     style={{ background: "#c8860a" }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════════
//             VALUES
//         ════════════════════════════════ */}
//         <section
//           ref={valuesRef}
//           className="gef-fade py-20 sm:py-28 px-6 sm:px-10 lg:px-16 leaf-bg"
//         >
//           <div className="max-w-5xl mx-auto text-center">
//             <div className="flex items-center justify-center gap-3 mb-4">
//               <span className="w-10 h-px" style={{ background: "#c8860a" }} />
//               <span
//                 className="text-xs font-bold uppercase tracking-widest"
//                 style={{ color: "#c8860a" }}
//               >
//                 Our Values
//               </span>
//               <span className="w-10 h-px" style={{ background: "#c8860a" }} />
//             </div>
//             <h2
//               className="text-gray-900 font-black leading-tight mb-14"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
//               }}
//             >
//               Unity &nbsp;•&nbsp; Service &nbsp;•&nbsp; Progress
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//               {[
//                 {
//                   word: "Unity",
//                   color: "#f0a500",
//                   desc: "We bring together diverse communities, partners and volunteers under one shared belief — that collective action creates lasting impact.",
//                 },
//                 {
//                   word: "Service",
//                   color: "#16a34a",
//                   desc: "Every initiative is driven by selfless service. We work on the ground, side-by-side with the communities we serve.",
//                 },
//                 {
//                   word: "Progress",
//                   color: "#1a5c3a",
//                   desc: "We measure success in lives improved, not just projects completed. Sustainable progress is our north star.",
//                 },
//               ].map((v) => (
//                 <div
//                   key={v.word}
//                   className="rounded-2xl p-8 text-left shadow-sm hover:shadow-lg transition-shadow duration-300"
//                   style={{
//                     background: "#fff",
//                     borderTop: `4px solid ${v.color}`,
//                   }}
//                 >
//                   <h3
//                     className="font-black mb-3"
//                     style={{
//                       fontFamily: "'Playfair Display', serif",
//                       color: v.color,
//                       fontSize: "1.5rem",
//                     }}
//                   >
//                     {v.word}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {v.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════════
//             CTA FOOTER STRIP
//         ════════════════════════════════ */}
//         <section
//           className="py-16 px-6 text-center"
//           style={{ background: "linear-gradient(135deg, #0d3d2a, #1a5c3a)" }}
//         >
//           <h2
//             className="text-white font-black mb-4"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
//             }}
//           >
//             Join Us in Transforming India
//           </h2>
//           <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
//             Whether you want to volunteer, donate or partner with us — there's a
//             place for you in this mission.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               className="px-8 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
//               style={{ background: "#c8860a" }}
//             >
//               Get Involved ↗
//             </button>
//             <button className="px-8 py-3.5 rounded-full font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200">
//               Donate Now ♥
//             </button>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import React from 'react'

const About = () => {
  return (
    <div>
      about page
    </div>
  )
}

export default About
