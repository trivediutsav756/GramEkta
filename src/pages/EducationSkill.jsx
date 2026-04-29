import React from "react";
import logo from "../assets/image-rmvbg.png";

const EducationSkill = () => {
  return (
    <div className="min-h-screen bg-[#fcf6ed] font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-b-[6px] border-[#f09a5b]">
        {/* Left brown section */}
        <div className="flex-1 bg-[#8a4918] text-white flex items-center px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Graduation Cap Icon */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-10 sm:w-12 md:w-[60px] mt-1 sm:mt-0"
            >
              <path d="M32 14 L6 26 L32 38 L58 26 Z" fill="white" />
              <path d="M16 31 L16 43 Q32 53 48 43 L48 31 L32 38 Z" fill="white" />
              <path d="M10 24 L10 40" stroke="white" strokeWidth="4" />
              <path d="M6 40 L14 40 L12 46 L8 46 Z" fill="white" />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif tracking-wide flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ fontFamily: "Georgia, serif" }}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">03</span>
              <span className="leading-tight sm:leading-normal">Education & Skill Development</span>
            </h1>
          </div>
        </div>
        
        {/* Right logo section */}
        <div className="bg-white px-4 py-3 sm:px-8 sm:py-4 flex items-center justify-center flex-shrink-0 border-t-2 md:border-t-0 border-[#fcf6ed] md:border-none min-w-[full] md:min-w-[150px] lg:min-w-[200px]">
          <img src={logo} alt="Gram Ekta Foundation" className="h-16 sm:h-20 md:h-28 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-[#fcf6ed]">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#5e544c] italic mb-10 md:mb-14 font-medium max-w-5xl leading-relaxed">
          Empowering the next generation through quality education, modern learning facilities, and comprehensive skill development programmes for students and teachers alike.
        </p>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Column 1: INFRASTRUCTURE */}
          <div className="flex flex-col shadow-sm">
            <div className="bg-[#8a4918] text-white py-4 px-6 text-center font-bold tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base">
              INFRASTRUCTURE
            </div>
            <div className="bg-white border border-[#e6cbb5] p-6 sm:p-8 flex-1">
              <ul className="space-y-4 text-[#4a4a4a] text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Establishment & construction of schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Training centres & digital learning labs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Libraries with modern reading materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Maintenance of educational buildings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: RESOURCES & ACCESS */}
          <div className="flex flex-col shadow-sm">
            <div className="bg-[#418e69] text-white py-4 px-6 text-center font-bold tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base">
              RESOURCES & ACCESS
            </div>
            <div className="bg-white border border-[#bce0cd] p-6 sm:p-8 flex-1">
              <ul className="space-y-4 text-[#4a4a4a] text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Providing computers & digital devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Supply of quality learning materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Scholarships for deserving students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Financial support for higher education</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: CAPACITY BUILDING */}
          <div className="flex flex-col shadow-sm">
            <div className="bg-[#d99c27] text-white py-4 px-6 text-center font-bold tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base">
              CAPACITY BUILDING
            </div>
            <div className="bg-white border border-[#f0dfbc] p-6 sm:p-8 flex-1">
              <ul className="space-y-4 text-[#4a4a4a] text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Skill development programs for youth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Teacher training & capacity building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Vocational courses & livelihood skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0"></span>
                  <span>Career guidance & mentorship programs</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationSkill;
