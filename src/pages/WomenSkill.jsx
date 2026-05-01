import React from "react";
import logo from "../assets/image-rmvbg.png";

const WomenSkill = () => {
  return (
    <div className="min-h-screen bg-[#fcf2f4] font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-b-[6px] border-[#f4a6b9]">
        {/* Left maroon section */}
        <div className="flex-1 bg-[#851d41] text-white flex items-center px-4 sm:px-6 md:px-12 py-5 sm:py-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Female Figure Icon */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-8 sm:w-10 md:w-[50px] mt-1 sm:mt-0"
            >
              <circle cx="32" cy="14" r="7" fill="white" />
              <path d="M26 24 L16 48 L48 48 L38 24 Z" fill="white" />
              <rect x="26" y="48" width="4" height="12" fill="white" />
              <rect x="34" y="48" width="4" height="12" fill="white" />
            </svg>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-wide flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4" style={{ fontFamily: "Georgia, serif" }}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">10</span>
              <span className="leading-tight sm:leading-normal">Women's Skill Development Training</span>
            </h1>
          </div>
        </div>
        
        {/* Right logo section */}
        <div className="bg-white px-4 py-3 sm:px-8 sm:py-4 flex items-center justify-center flex-shrink-0 border-t-2 md:border-t-0 border-[#fcf2f4] md:border-none min-w-[full] md:min-w-[150px] lg:min-w-[200px]">
          <img src={logo} alt="Gram Ekta Foundation" className="h-16 sm:h-20 md:h-28 object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-[#fcf2f4]">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#6c2e42] italic mb-10 md:mb-14 font-medium max-w-5xl leading-relaxed">
          Empowering women through targeted skill training, livelihood programmes and entrepreneurship support — building confident, self-reliant women who lead their communities.
        </p>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Left Column: TRAINING PROGRAMMES */}
          <div className="flex flex-col">
            <div className="bg-[#851d41] text-white py-4 px-6 font-bold tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base shadow-sm">
              TRAINING PROGRAMMES
            </div>
            
            <div className="flex flex-col gap-4 mt-4">
              {/* Card 1 */}
              <div className="bg-white border border-[#e8a5b8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#851d41] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#851d41] font-bold text-base sm:text-lg mb-1 sm:mb-2">Tailoring & Textile Crafts</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Stitching, embroidery, fabric printing and garment making for self-employment and small enterprise.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#e8a5b8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#851d41] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#851d41] font-bold text-base sm:text-lg mb-1 sm:mb-2">Digital Literacy & Computer Skills</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Basic computing, internet use, digital payments and online business skills for modern livelihoods.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#e8a5b8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#851d41] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#851d41] font-bold text-base sm:text-lg mb-1 sm:mb-2">Entrepreneurship Development</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Business planning, micro-enterprise setup, credit linkage and marketing skills for aspiring women entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#e8a5b8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#851d41] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#851d41] font-bold text-base sm:text-lg mb-1 sm:mb-2">Health & Nutrition Education</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Maternal health, child nutrition, hygiene and community health worker training for healthier families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: IMPACT & SUPPORT */}
          <div className="flex flex-col">
            <div className="bg-[#458f5a] text-white py-4 px-6 font-bold tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base shadow-sm">
              IMPACT & SUPPORT
            </div>
            
            <div className="flex flex-col gap-4 mt-4">
              {/* Card 1 */}
              <div className="bg-white border border-[#a5cba8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#458f5a] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#458f5a] font-bold text-base sm:text-lg mb-1 sm:mb-2">Self-Help Group (SHG) Formation</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Forming and nurturing women SHGs for collective savings, credit access and mutual support.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#a5cba8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#458f5a] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#458f5a] font-bold text-base sm:text-lg mb-1 sm:mb-2">Livelihood & Income Generation</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Creating sustainable income opportunities through product development, market linkages and cooperatives.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#a5cba8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#458f5a] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#458f5a] font-bold text-base sm:text-lg mb-1 sm:mb-2">Legal Rights & Awareness</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Educating women on their legal rights, government welfare schemes and entitlements for personal empowerment.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#a5cba8] p-5 sm:p-6 flex items-start gap-4 sm:gap-6 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#458f5a] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#458f5a] font-bold text-base sm:text-lg mb-1 sm:mb-2">Leadership & Confidence Building</h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Workshops and mentoring programmes to build leadership qualities and decision-making confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WomenSkill;
