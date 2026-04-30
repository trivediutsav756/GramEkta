import { useState, useRef, useEffect } from "react";

const BASE_URL = "https://gramekta.pythonanywhere.com";

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [animClass, setAnimClass] = useState("");
  const busy = useRef(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/testimonials/`);
        const json = await response.json();
        
        // The API returns { status, message, data: [] }
        const actualData = json.data || json; 
        
        if (Array.isArray(actualData)) {
          setTestimonialsList(actualData);
        } else {
          console.error("API did not return an array in 'data' or root:", json);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const total = testimonialsList.length;

  const slide = (nextIdx, direction) => {
    if (busy.current || total <= 1) return;
    busy.current = true;

    const outClass = direction === "right" ? "t-out-left" : "t-out-right";
    const inClass = direction === "right" ? "t-in-right" : "t-in-left";

    setAnimClass(outClass);
    setTimeout(() => {
      setCurrent(nextIdx);
      setAnimClass(inClass);
      setTimeout(() => {
        setAnimClass("");
        busy.current = false;
      }, 300);
    }, 180);
  };

  const prev = () => slide((current - 1 + total) % total, "left");
  const next = () => slide((current + 1) % total, "right");

  const padded = total > 0 ? String(current + 1).padStart(2, "0") : "00";
  const paddedTotal = total > 0 ? String(total).padStart(2, "0") : "00";
  const progressPct = total > 0 ? ((current + 1) / total) * 100 : 0;

  if (loading) {
    return (
      <section className="w-full bg-white py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-800"></div>
      </section>
    );
  }

  if (total === 0) return null;

  const t = testimonialsList[current];
  if (!t) return null;

  return (
    <section className="w-full bg-white font-['Inter',system-ui,sans-serif] py-10 sm:py-12 md:py-16">
      {/* Custom keyframe animations */}
      <style>{`
        @keyframes tInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes tOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(40px); }
        }

        .t-in-right { animation: tInRight 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .t-in-left  { animation: tInLeft  0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .t-out-left  { animation: tOutLeft  0.18s ease both; }
        .t-out-right { animation: tOutRight 0.18s ease both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <div className={`relative flex flex-col md:flex-row items-stretch ${animClass}`}>
          {/* LEFT IMAGE */}
          <div className="relative z-20 w-full md:w-[38%] flex-shrink-0">
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[380px] rounded-b-[120px] sm:rounded-b-[160px] md:rounded-b-[200px] overflow-hidden bg-amber-700 shadow-lg">
              <img
                src={t.image ? `${BASE_URL}${t.image}` : ""}
                alt={t.name || "Testimonial"}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Rating Badge */}
              <div className="absolute top-0 left-0 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] bg-teal-800 rounded-br-3xl flex items-center justify-center text-white">
                <div className="flex items-center gap-1 text-xs sm:text-sm font-bold">
                  <span className="text-amber-400">★</span>
                  <span>{t.rating?.toFixed(1) || "5.0"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative w-full md:flex-1 -mt-6 sm:-mt-8 md:mt-0 md:-ml-20 lg:-ml-24 z-10">
            <div className="bg-[#f9f2e0] rounded-2xl md:rounded-r-3xl md:rounded-l-2xl px-5 pt-10 pb-7 sm:px-8 sm:pt-12 sm:pb-8 md:pl-28 lg:pl-32 md:pr-10 md:py-10 min-h-[200px] sm:min-h-[240px] md:min-h-[380px] flex flex-col justify-center shadow-sm">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                "{t.description || ""}"
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {t.name || "Anonymous"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Beneficiary</p>
                </div>

                <svg
                  className="w-8 h-7 sm:w-10 sm:h-8 md:w-12 md:h-10 text-teal-800 opacity-50 flex-shrink-0"
                  viewBox="0 0 70 60"
                  fill="none"
                >
                  <path
                    d="M16 52C29 46 37 34 37 22C37 13 33 6 28 2C16 10 9 18 7 29C5 40 8 48 16 52Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M43 52C56 46 64 34 64 22C64 13 60 6 55 2C43 10 36 18 34 29C32 40 35 48 43 52Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 md:mt-7 px-2 sm:px-3">
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center cursor-pointer text-gray-700 transition-all hover:bg-teal-800 hover:border-teal-800 hover:text-white hover:scale-105"
              aria-label="Previous"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                width="18"
                height="18"
              >
                <path
                  d="M19 12H5M12 5l-7 7 7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center cursor-pointer text-gray-700 transition-all hover:bg-teal-800 hover:border-teal-800 hover:text-white hover:scale-105"
              aria-label="Next"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                width="18"
                height="18"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl md:text-[26px] font-semibold text-teal-800 leading-none min-w-[36px] text-right">
              {padded}
            </span>
            <div className="w-24 sm:w-32 md:w-[150px] h-[3px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-400"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-sm md:text-base text-gray-400 font-medium">
              {paddedTotal}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}