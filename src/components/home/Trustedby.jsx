import curveImg from "../../assets/curvy_white.png"; // adjust path if needed

const TrustedBy = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#fdf8ee" }}
    >
      {/* Main content */}
      <div className="py-12 sm:py-16 px-4 relative z-10">
        {/* Heading */}
        <p className="text-center text-gray-800 font-bold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-14 tracking-tight">
          Trusted by over{" "}
          <span style={{ color: "#f0a500" }}>90K+</span>{" "}
          companies worldwide
        </p>

        {/* Logos row */}
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20 px-4">

          {/* Logo 1 */}
          <div className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity duration-200">
            <svg viewBox="0 0 110 70" className="w-20 sm:w-24 md:w-28">
              {/* SVG content unchanged */}
              <text x="55" y="22" textAnchor="middle" fontSize="10" fontWeight="800" fill="#3d3d3d">ULTRA</text>
            </svg>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 sm:gap-3 opacity-60 hover:opacity-90 transition-opacity duration-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-[#3d3d3d]">
              <span className="text-white font-black">QC</span>
            </div>
            <div>
              <p className="text-xs font-black tracking-widest text-gray-700">POWER</p>
              <p className="font-black text-gray-700">XR2</p>
              <p className="text-xs font-black tracking-widest text-gray-700">MODULE</p>
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity duration-200">
            <svg viewBox="0 0 90 70" className="w-16 sm:w-20 md:w-24">
              <text x="45" y="26" textAnchor="middle" fontSize="10" fontWeight="800" fill="#3d3d3d">
                ULTIMATE
              </text>
            </svg>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity duration-200">
            <svg viewBox="0 0 130 60" className="w-24 sm:w-28 md:w-36">
              <text x="65" y="30" textAnchor="middle" fontSize="10" fill="#3d3d3d">
                MEGA
              </text>
            </svg>
          </div>

          {/* Logo 5 */}
          <div className="flex flex-col items-center opacity-60 hover:opacity-90 transition-opacity duration-200">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-5 h-5 bg-gray-700" />
              <div className="w-5 h-5 rounded-full bg-gray-700" />
              <div className="w-5 h-5 rounded-full bg-gray-700 -ml-1" />
            </div>
            <span className="text-gray-700 font-bold text-xs">
              logoipsum<sup>®</sup>
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Curve Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={curveImg}
          alt="curve"
          className="w-full object-cover block"
        />
      </div>
    </section>
  );
};

export default TrustedBy;