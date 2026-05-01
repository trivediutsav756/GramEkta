import React from "react";
import logo from "../assets/image-rmvbg.png";

const RuralUrban = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-b-[6px] border-[#d4814e]">
        {/* Left green section */}
        <div className="flex-1 bg-[#336545] text-white flex items-center px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Road Icon */}
            <svg
              viewBox="0 0 50 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-8 sm:w-10 md:w-[50px] mt-1 sm:mt-0"
            >
              <path d="M18 4 L4 32 L16 32 L23 4 Z" fill="white" />
              <path d="M32 4 L46 32 L34 32 L27 4 Z" fill="white" />
              <rect x="23.5" y="4" width="3" height="6" fill="white" />
              <rect x="23.5" y="15" width="3" height="6" fill="white" />
              <rect x="23.5" y="26" width="3" height="6" fill="white" />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif tracking-wide flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ fontFamily: "Georgia, serif" }}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">01</span>
              <span className="leading-tight sm:leading-normal">Rural & Urban Development</span>
            </h1>
          </div>
        </div>
        
        {/* Right logo section */}
        <div className="bg-white px-4 py-3 sm:px-8 sm:py-4 flex items-center justify-center flex-shrink-0 border-t-2 md:border-t-0 border-[#f4f7f6] md:border-none min-w-[full] md:min-w-[150px] lg:min-w-[200px]">
          <img src={logo} alt="Gram Ekta Foundation" className="h-16 sm:h-20 md:h-28 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-white">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#515c6b] italic mb-10 md:mb-14 font-medium max-w-5xl leading-relaxed">
          Gram Ekta Foundation undertakes comprehensive infrastructure development to improve quality of life in both rural and urban communities, operating entirely without profit motive.
        </p>

        {/* Grid Layout (3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#e9f2eb] border border-[#b8dac4] border-l-[8px] border-l-[#336545] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm">
            <h3 className="text-[#1f3d2a] font-bold text-lg sm:text-xl mb-3 md:mb-4 leading-tight">Road & Footpath Construction</h3>
            <p className="text-[#4b5a51] text-sm md:text-base leading-relaxed">
              Building and repairing roads, footpaths and culverts to connect communities and improve mobility.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e9f2eb] border border-[#b8dac4] border-l-[8px] border-l-[#336545] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm">
            <h3 className="text-[#1f3d2a] font-bold text-lg sm:text-xl mb-3 md:mb-4 leading-tight">Drainage Systems</h3>
            <p className="text-[#4b5a51] text-sm md:text-base leading-relaxed">
              Installing and maintaining drainage infrastructure to prevent waterlogging and flooding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#e9f2eb] border border-[#b8dac4] border-l-[8px] border-l-[#336545] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm">
            <h3 className="text-[#1f3d2a] font-bold text-lg sm:text-xl mb-3 md:mb-4 leading-tight">Community Halls</h3>
            <p className="text-[#4b5a51] text-sm md:text-base leading-relaxed">
              Constructing multipurpose community halls for local gatherings, events and social activities.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#e9f2eb] border border-[#b8dac4] border-l-[8px] border-l-[#336545] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm">
            <h3 className="text-[#1f3d2a] font-bold text-lg sm:text-xl mb-3 md:mb-4 leading-tight">School Buildings</h3>
            <p className="text-[#4b5a51] text-sm md:text-base leading-relaxed">
              Building educational infrastructure including classrooms, libraries and essential school facilities.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#e9f2eb] border border-[#b8dac4] border-l-[8px] border-l-[#336545] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm">
            <h3 className="text-[#1f3d2a] font-bold text-lg sm:text-xl mb-3 md:mb-4 leading-tight">Civil Infrastructure</h3>
            <p className="text-[#4b5a51] text-sm md:text-base leading-relaxed">
              Comprehensive civil infrastructure works for the overall benefit and welfare of the community.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#e9f2eb] border border-[#b8dac4] border-l-[8px] border-l-[#336545] p-5 sm:p-6 md:p-8 flex flex-col shadow-sm">
            <h3 className="text-[#1f3d2a] font-bold text-lg sm:text-xl mb-3 md:mb-4 leading-tight">Public Utilities</h3>
            <p className="text-[#4b5a51] text-sm md:text-base leading-relaxed">
              Repair and maintenance of essential public utility structures and civic amenities.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RuralUrban;
