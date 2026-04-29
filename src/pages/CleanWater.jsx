import React from "react";
import logo from "../assets/image-rmvbg.png";

const CleanWater = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f6] font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-b-[4px] border-[#6cb582]">
        {/* Left blue section */}
        <div className="flex-1 bg-[#1a66b2] text-white flex items-center px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
            {/* Wave Icon */}
            <svg
              viewBox="0 0 50 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-8 sm:w-10 md:w-[50px] mt-1 sm:mt-0"
            >
              <path
                d="M2 8C6 8 8 3 13 3C18 3 20 8 25 8C30 8 32 3 37 3C42 3 44 8 48 8"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 18C6 18 8 13 13 13C18 13 20 18 25 18C30 18 32 13 37 13C42 13 44 18 48 18"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 28C6 28 8 23 13 23C18 23 20 28 25 28C30 28 32 23 37 23C42 23 44 28 48 28"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif tracking-wide flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ fontFamily: "Georgia, serif" }}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">02</span>
              <span className="leading-tight sm:leading-normal">Clean Drinking Water & Sanitation</span>
            </h1>
          </div>
        </div>
        
        {/* Right logo section */}
        <div className="bg-white px-4 py-3 sm:px-8 sm:py-4 flex items-center justify-center flex-shrink-0 border-t-2 md:border-t-0 border-[#f4f7f6] md:border-none min-w-[full] md:min-w-[150px] lg:min-w-[200px]">
          <img src={logo} alt="Gram Ekta Foundation" className="h-16 sm:h-20 md:h-28 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 border-x-0 md:border-x-4 border-b-4 border-[#76b595]/20 bg-[#f4f7f6]">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#2a5d6e] italic mb-8 md:mb-10 font-medium max-w-5xl">
          Ensuring access to safe and potable water for all — designing, developing and maintaining modern water infrastructure for public health.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Left Column: WATER SUPPLY */}
          <div className="flex flex-col gap-4">
            {/* Column Header */}
            <div className="bg-[#1c64b5] text-white py-3 px-4 sm:px-6 font-bold tracking-[0.1em] sm:tracking-[0.2em] text-base sm:text-lg">
              WATER SUPPLY
            </div>
            
            {/* Card 1 */}
            <div className="bg-white border border-[#b3d4f0] p-4 sm:p-6 flex gap-3 sm:gap-5">
              <div className="flex-shrink-0 sm:mt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1c64b5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#1c64b5] font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">Drinking Water Supply Systems</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete design, installation, operation and maintenance of community drinking water supply networks.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#b3d4f0] p-4 sm:p-6 flex gap-3 sm:gap-5">
              <div className="flex-shrink-0 sm:mt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1c64b5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#1c64b5] font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">Water Purification Units</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Setting up modern water purification plants to treat contaminated water and ensure potability.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#b3d4f0] p-4 sm:p-6 flex gap-3 sm:gap-5">
              <div className="flex-shrink-0 sm:mt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1c64b5] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#1c64b5] font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">Rainwater Harvesting</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building rainwater harvesting systems to collect, store and utilise rainwater for community needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: SANITATION & RECHARGE */}
          <div className="flex flex-col gap-4">
            {/* Column Header */}
            <div className="bg-[#3e8e5d] text-white py-3 px-4 sm:px-6 font-bold tracking-[0.1em] sm:tracking-[0.2em] text-base sm:text-lg">
              SANITATION & RECHARGE
            </div>
            
            {/* Card 1 */}
            <div className="bg-white border border-[#a8d4be] p-4 sm:p-6 flex gap-3 sm:gap-5">
              <div className="flex-shrink-0 sm:mt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3e8e5d] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#3e8e5d] font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">Groundwater Recharge Structures</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building recharge pits and structures to replenish groundwater and maintain water table levels.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#a8d4be] p-4 sm:p-6 flex gap-3 sm:gap-5">
              <div className="flex-shrink-0 sm:mt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3e8e5d] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#3e8e5d] font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">Sanitation Facilities</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Planning and installing sanitation infrastructure including toilets, sewage systems, and hygiene facilities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#a8d4be] p-4 sm:p-6 flex gap-3 sm:gap-5">
              <div className="flex-shrink-0 sm:mt-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3e8e5d] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[#3e8e5d] font-bold text-base sm:text-lg mb-1 sm:mb-2 leading-tight">Related Infrastructure</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive water and sanitation-related infrastructure projects for sustainable community health.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CleanWater;
