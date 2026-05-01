import { useNavigate } from "react-router-dom";
import about_img from "../../assets/about_img.png";

const features = [
  { label: "Rural & Urban Development", color: "bg-[#1a7a5e]" },
  { label: "Clean Water & STP Plant", color: "bg-yellow-400" },
  { label: "Education & Agriculture", color: "bg-orange-500" },
  { label: "Renewable Energy & Public Welfare", color: "bg-gray-800" },
];

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-20">
        {/* ── LEFT: Image Block ── */}
        <div className="relative flex-shrink-0 w-full lg:w-[480px] flex items-center justify-center min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
          {/* Gray paint splash background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <svg
              viewBox="0 0 520 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M60 240 C40 160, 80 80, 160 60 C240 40, 340 80, 400 140 C460 200, 480 300, 440 370 C400 440, 300 470, 200 450 C100 430, 80 320, 60 240 Z"
                fill="#d1d5db"
                opacity="0.45"
              />
              <path
                d="M30 200 C10 150, 50 100, 100 120 C80 160, 70 200, 80 240 C60 240, 30 230, 30 200Z"
                fill="#d1d5db"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Yellow accent bar top */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[28%] w-36 sm:w-44 h-3 bg-yellow-400 rounded-full z-10" />

          {/* Teal rounded-rect frame */}
          <div className="relative z-20 w-full max-w-[650px] mx-auto">
            {/* Green Frame */}
            <div className="relative border-[10px] border-[#1a7a5e] rounded-[32px] h-[420px] sm:h-[480px] lg:h-[480px]" />

            {/* Image (OVERLAPPING) */}
            <img
              src={about_img}
              alt="Happy children"
              className="
      absolute
      -top-6
      -left-6
      w-[120%]
      h-[120%]
      object-cover
      rounded-[28px]
      z-10
    "
            />
          </div>

          {/* Brown brush stroke bottom-left spilling out */}
          <div className="absolute bottom-[4%] left-[2%] pointer-events-none select-none z-10">
            <svg
              viewBox="0 0 260 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-16 sm:w-64 sm:h-20"
            >
              <path
                d="M10 50 C40 30, 90 65, 140 45 C190 25, 230 55, 255 40"
                stroke="rgba(101,67,33,0.35)"
                strokeWidth="28"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Quotation mark watermark top-right */}
          <div className="absolute top-2 right-0 pointer-events-none select-none z-0 opacity-10">
            <svg
              viewBox="0 0 80 70"
              className="w-14 h-12 sm:w-20 sm:h-16 text-gray-400"
              fill="currentColor"
            >
              <path d="M0 40 C0 20, 14 0, 36 0 L36 14 C24 14, 16 22, 16 34 L30 34 L30 70 L0 70 Z" />
              <path d="M44 40 C44 20, 58 0, 80 0 L80 14 C68 14, 60 22, 60 34 L74 34 L74 70 L44 70 Z" />
            </svg>
          </div>
        </div>

        {/* ── RIGHT: Text Content ── */}
        <div className="flex-1 min-w-0">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-yellow-500 text-base font-semibold italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              About Us
            </span>
            <span className="block w-10 h-px bg-yellow-400" />
          </div>

          {/* Heading */}
          <h2
            className="text-gray-900 font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            Building Communities,
            <br />
            <span className="text-[#1a7a5e]">Transforming Lives</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
            A non-profit organisation dedicated to rural &amp; urban
            development, clean water, STP Plant, education, agriculture,
            renewable energy &amp; public welfare.
          </p>

          {/* Tagline */}
          <p className="text-yellow-500 text-sm font-medium italic mb-8">
            Unity &bull; Service &bull; Progress
          </p>

          {/* Feature checklist — 1 col on mobile, 2 cols on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 mb-10">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${f.color}`}
                >
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-800 font-semibold text-sm">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/about")}
            className="flex items-center gap-2 bg-[#1a7a5e] hover:bg-[#155f49] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Know More
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;