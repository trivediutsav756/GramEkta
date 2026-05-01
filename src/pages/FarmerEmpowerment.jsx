import React from "react";
import logo from "../assets/image-rmvbg.png";

const FarmerEmpowerment = () => {
  return (
    <div className="min-h-screen bg-[#f3f7f2] font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-b-[6px] border-[#d19e34]">
        {/* Left olive green section */}
        <div className="flex-1 bg-[#42632b] text-white flex items-center px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Sprout Icon */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-10 sm:w-12 md:w-[60px] mt-1 sm:mt-0"
            >
              <path d="M32 35 V60" stroke="white" strokeWidth="6" strokeLinecap="round" />
              <path d="M32 40 C 15 40 5 30 5 15 C 20 15 32 25 32 40 Z" fill="white" />
              <path d="M32 30 C 45 30 55 20 55 5 C 40 5 32 15 32 30 Z" fill="white" />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-wide flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ fontFamily: "Georgia, serif" }}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">04</span>
              <span className="leading-tight sm:leading-normal">Farmer Empowerment & Agricultural Development</span>
            </h1>
          </div>
        </div>
        
        {/* Right logo section */}
        <div className="bg-white px-4 py-3 sm:px-8 sm:py-4 flex items-center justify-center flex-shrink-0 border-t-2 md:border-t-0 border-[#f3f7f2] md:border-none min-w-[full] md:min-w-[150px] lg:min-w-[200px]">
          <img src={logo} alt="Gram Ekta Foundation" className="h-16 sm:h-20 md:h-28 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-[#f3f7f2]">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#4a6b53] italic mb-10 md:mb-14 font-medium max-w-5xl leading-relaxed">
          Supporting farmers with modern tools, knowledge, sustainable practices and government scheme facilitation to build thriving agricultural communities.
        </p>

        {/* Grid Layout (5 columns on very large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#c4dbca] border-t-[8px] border-t-[#397545] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm rounded-b-md">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#397545] flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none">
                <path d="M32 35 V55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M32 40 C 18 40 10 30 10 18 C 22 18 32 26 32 40 Z" fill="currentColor" />
                <path d="M32 30 C 42 30 50 22 50 10 C 38 10 32 18 32 30 Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[#397545] font-bold text-base sm:text-lg mb-4 leading-tight">Awareness & Training</h3>
            <p className="text-[#6a766c] text-sm leading-relaxed">
              Farmer awareness camps, field training and capacity building workshops on modern methods.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#c4dbca] border-t-[8px] border-t-[#397545] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm rounded-b-md">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#397545] flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" strokeWidth="5">
                <circle cx="28" cy="28" r="14" />
                <path d="M38 38 L52 52" strokeLinecap="round" />
                <path d="M28 20 C 32 20 34 24 34 28" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-[#397545] font-bold text-base sm:text-lg mb-4 leading-tight">Modern Tools Supply</h3>
            <p className="text-[#6a766c] text-sm leading-relaxed">
              Providing modern agricultural tools, equipment, and technology inputs to farmers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#c4dbca] border-t-[8px] border-t-[#397545] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm rounded-b-md">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#397545] flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none">
                <path d="M12 32 C 12 10 32 10 52 10 C 52 32 32 52 12 32 Z" fill="currentColor" />
                <path d="M12 52 L52 10" stroke="#397545" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="text-[#397545] font-bold text-base sm:text-lg mb-4 leading-tight">Sustainable Farming</h3>
            <p className="text-[#6a766c] text-sm leading-relaxed">
              Promoting sustainable, eco-friendly farming practices for long-term soil and crop health.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#c4dbca] border-t-[8px] border-t-[#397545] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm rounded-b-md">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#397545] flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none">
                <path d="M12 24 C 18 20 26 28 32 24 C 38 20 46 28 52 24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M12 34 C 18 30 26 38 32 34 C 38 30 46 38 52 34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M12 44 C 18 40 26 48 32 44 C 38 40 46 48 52 44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-[#397545] font-bold text-base sm:text-lg mb-4 leading-tight">Irrigation Support</h3>
            <p className="text-[#6a766c] text-sm leading-relaxed">
              Planning and facilitating irrigation support systems for consistent and reliable water access.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-[#c4dbca] border-t-[8px] border-t-[#397545] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm rounded-b-md">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#397545] flex items-center justify-center mb-6 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 34 L32 24 L42 34" />
                <path d="M14 42 L24 32 L40 48" />
                <path d="M40 36 L50 46" />
                <path d="M22 34 C 16 34 16 42 22 42" />
                <path d="M42 34 C 48 34 48 42 42 42" />
                <circle cx="32" cy="46" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[#397545] font-bold text-base sm:text-lg mb-4 leading-tight">Scheme Facilitation</h3>
            <p className="text-[#6a766c] text-sm leading-relaxed">
              Helping farmers access government and non-government agricultural schemes and benefits.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FarmerEmpowerment;
