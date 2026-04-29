import React from "react";
import logo from "../assets/image-rmvbg.png";

const Environment = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f4] font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-b-[6px] border-[#a2d246]">
        {/* Left dark green section */}
        <div className="flex-1 bg-[#1e5625] text-white flex items-center px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Pine Tree Icon */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-10 sm:w-12 md:w-[60px] mt-1 sm:mt-0"
            >
              <path d="M32 4 L44 24 L36 24 L48 44 L36 44 L52 60 L12 60 L28 44 L16 44 L28 24 L20 24 Z" fill="white" />
              <rect x="28" y="60" width="8" height="4" fill="white" />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-wide flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ fontFamily: "Georgia, serif" }}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">11</span>
              <span className="leading-tight sm:leading-normal">Environmental Development</span>
            </h1>
          </div>
        </div>
        
        {/* Right logo section */}
        <div className="bg-white px-4 py-3 sm:px-8 sm:py-4 flex items-center justify-center flex-shrink-0 border-t-2 md:border-t-0 border-[#f4f7f4] md:border-none min-w-[full] md:min-w-[150px] lg:min-w-[200px]">
          <img src={logo} alt="Gram Ekta Foundation" className="h-16 sm:h-20 md:h-28 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-[#f4f7f4]">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#3a6842] italic mb-10 md:mb-14 font-medium max-w-5xl leading-relaxed">
          Nurturing nature and protecting the environment — promoting afforestation, biodiversity, pollution control and eco-conscious community practices for a sustainable future.
        </p>

        {/* 6 Cards Grid (3 columns on desktop, 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Afforestation */}
          <div className="bg-[#e2efdf] border-2 border-[#2d7a3a] p-5 sm:p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2d7a3a] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none">
                  <path d="M32 10 L44 26 L36 26 L48 46 L36 46 L50 60 L14 60 L28 46 L16 46 L28 26 L20 26 Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-[#2d7a3a] font-bold text-base sm:text-lg leading-tight">Afforestation & Tree Plantation</h3>
            </div>
            <p className="text-[#4b5a51] text-sm leading-relaxed mt-1">
              Organising large-scale tree plantation drives in barren lands, roadsides, schools and community spaces to increase green cover.
            </p>
          </div>

          {/* Card 2: Biodiversity */}
          <div className="bg-[#e8eedb] border-2 border-[#6b953d] p-5 sm:p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6b953d] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none">
                  <path d="M32 50 C 15 50 10 35 10 20 C 25 20 40 30 32 50 Z" fill="currentColor" />
                  <path d="M32 50 C 50 50 55 35 55 20 C 40 20 25 30 32 50 Z" fill="currentColor" />
                  <path d="M32 50 V60" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-[#6b953d] font-bold text-base sm:text-lg leading-tight">Biodiversity Conservation</h3>
            </div>
            <p className="text-[#4b5a51] text-sm leading-relaxed mt-1">
              Protecting local flora and fauna through awareness, habitat preservation and promotion of native plant species in communities.
            </p>
          </div>

          {/* Card 3: Waste Reduction */}
          <div className="bg-[#f6f4e1] border-2 border-[#93821a] p-5 sm:p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#93821a] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M26 14 L32 24 L20 24 Z" fill="currentColor" />
                  <path d="M20 24 L14 36 L26 36 Z" fill="currentColor" />
                  <path d="M44 24 L50 36 L38 36 Z" fill="currentColor" />
                  <path d="M38 36 L32 48 L44 48 Z" fill="currentColor" />
                  <path d="M26 54 L32 44 L38 54 Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-[#93821a] font-bold text-base sm:text-lg leading-tight">Waste Reduction & Recycling</h3>
            </div>
            <p className="text-[#555] text-sm leading-relaxed mt-1">
              Promoting zero-waste practices, composting, material recycling and reducing single-use plastic at the community level.
            </p>
          </div>

          {/* Card 4: Watershed */}
          <div className="bg-[#dff2f3] border-2 border-[#17727b] p-5 sm:p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#17727b] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                  <path d="M14 26 C 22 20 30 32 38 26 C 46 20 50 26 50 26" />
                  <path d="M14 36 C 22 30 30 42 38 36 C 46 30 50 36 50 36" />
                  <path d="M14 46 C 22 40 30 52 38 46 C 46 40 50 46 50 46" />
                </svg>
              </div>
              <h3 className="text-[#17727b] font-bold text-base sm:text-lg leading-tight">Watershed & Water Body Restoration</h3>
            </div>
            <p className="text-[#445b5c] text-sm leading-relaxed mt-1">
              Rejuvenating ponds, lakes, rivers and watersheds through desilting, bund repair and community water conservation programs.
            </p>
          </div>

          {/* Card 5: Pollution Control */}
          <div className="bg-[#fbece5] border-2 border-[#e25d19] p-5 sm:p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e25d19] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="4">
                  <rect x="18" y="24" width="28" height="20" rx="2" />
                  <path d="M26 24 V16 M38 24 V16 M26 16 H38" strokeLinecap="round" />
                  <path d="M26 44 V52 M38 44 V52" strokeLinecap="round" />
                  <circle cx="26" cy="34" r="3" fill="currentColor" />
                  <circle cx="38" cy="34" r="3" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-[#e25d19] font-bold text-base sm:text-lg leading-tight">Pollution Control Initiatives</h3>
            </div>
            <p className="text-[#6c5145] text-sm leading-relaxed mt-1">
              Campaigns and practical programs to reduce air, water and soil pollution, including awareness drives and eco-friendly alternatives.
            </p>
          </div>

          {/* Card 6: Eco-Awareness */}
          <div className="bg-[#efe5f3] border-2 border-[#6a2b8e] p-5 sm:p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6a2b8e] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none">
                  <path d="M28 46 V30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path d="M28 36 C 18 36 12 28 12 18 C 22 18 28 26 28 36 Z" fill="currentColor" />
                  <path d="M28 30 C 40 30 48 20 48 8 C 36 8 28 18 28 30 Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-[#6a2b8e] font-bold text-base sm:text-lg leading-tight">Eco-Awareness & Green Education</h3>
            </div>
            <p className="text-[#554a5c] text-sm leading-relaxed mt-1">
              Running environmental literacy programmes in schools and communities to cultivate a culture of ecological responsibility.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Environment;
