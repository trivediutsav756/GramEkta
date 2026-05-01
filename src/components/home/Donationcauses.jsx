import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
 
const causes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&q=80&fit=crop",
    percent: "2.57%",
    percentColor: "bg-[#1a7a5e]",
    title: "Road & Footpath Construction",
    raised: 1285,
    goal: 50000,
    barColor: "bg-[#1a7a5e]",
    barBg: "bg-teal-100",
    goalColor: "text-[#1a7a5e]",
    btnColor: "bg-[#1a7a5e] hover:bg-[#155f49]",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&fit=crop",
    percent: "1.86%",
    percentColor: "bg-orange-500",
    title: "Drainage Systems",
    raised: 1305,
    goal: 70000,
    barColor: "bg-orange-500",
    barBg: "bg-orange-100",
    goalColor: "text-orange-500",
    btnColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80&fit=crop",
    percent: "1.08%",
    percentColor: "bg-[#1a7a5e]",
    title: "Community Halls",
    raised: 860,
    goal: 80000,
    barColor: "bg-[#1a7a5e]",
    barBg: "bg-teal-100",
    goalColor: "text-[#1a7a5e]",
    btnColor: "bg-[#1a7a5e] hover:bg-[#155f49]",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80&fit=crop",
    percent: "3.20%",
    percentColor: "bg-[#1a7a5e]",
    title: "School Buildings",
    raised: 3200,
    goal: 100000,
    barColor: "bg-[#1a7a5e]",
    barBg: "bg-teal-100",
    goalColor: "text-[#1a7a5e]",
    btnColor: "bg-[#1a7a5e] hover:bg-[#155f49]",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80&fit=crop",
    percent: "2.10%",
    percentColor: "bg-orange-500",
    title: "Civil Infrastructure",
    raised: 2100,
    goal: 60000,
    barColor: "bg-orange-500",
    barBg: "bg-orange-100",
    goalColor: "text-orange-500",
    btnColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80&fit=crop",
    percent: "4.50%",
    percentColor: "bg-[#1a7a5e]",
    title: "Public Utilities",
    raised: 4500,
    goal: 90000,
    barColor: "bg-[#1a7a5e]",
    barBg: "bg-teal-100",
    goalColor: "text-[#1a7a5e]",
    btnColor: "bg-[#1a7a5e] hover:bg-[#155f49]",
  },
];
 
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};
 
const DonationCauses = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
 
  useEffect(() => {
    const handleResize = () => {
      const next = getVisibleCount();
      setVisibleCount(next);
      setCurrent((prev) => Math.min(prev, Math.max(0, causes.length - next)));
    };
 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const maxIndex = Math.max(causes.length - visibleCount, 0);
 
  const slidePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };
 
  const slideNext = () => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };
 
  const getCardWidth = () => {
    if (visibleCount === 1) return "100%";
    if (visibleCount === 2) return "calc((100% - 20px) / 2)";
    return "calc((100% - 48px) / 3)";
  };
 
  const getTranslateValue = () => {
    if (visibleCount === 1) return `-${current * 100}%`;
    if (visibleCount === 2) return `calc(-${current} * ((100% - 20px) / 2 + 20px))`;
    return `calc(-${current} * ((100% - 48px) / 3 + 24px))`;
  };
 
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f0e8] px-4 py-12 sm:py-16 lg:py-20">
      {/* Decorative doodle */}
      <div className="pointer-events-none absolute bottom-6 right-6 hidden select-none opacity-30 sm:block">
        <svg
          viewBox="0 0 120 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-36 w-28"
        >
          <path
            d="M60 150 C60 120, 55 90, 60 60"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M60 100 C40 90, 30 70, 50 65 C55 80, 60 90, 60 100Z"
            fill="#f59e0b"
            opacity="0.5"
          />
          <path
            d="M60 80 C80 70, 90 50, 70 45 C65 60, 60 70, 60 80Z"
            fill="#1a7a5e"
            opacity="0.4"
          />
          <path
            d="M30 30 C30 26,34 24,36 28 C38 24,42 26,42 30 C42 34,36 38,36 38 C36 38,30 34,30 30Z"
            fill="#f59e0b"
            opacity="0.6"
          />
          <path
            d="M75 140 C75 137,78 136,79 138 C80 136,83 137,83 140 C83 143,79 145,79 145 C79 145,75 143,75 140Z"
            fill="#1a7a5e"
            opacity="0.5"
          />
        </svg>
      </div>
 
      <div className="mx-auto max-w-6xl">
        {/* Slider */}
        <div className="relative">
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className="flex gap-5 lg:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${getTranslateValue()})`,
              }}
            >
              {causes.map((cause) => (
                <div
                  key={cause.id}
                  className="shrink-0"
                  style={{ width: getCardWidth() }}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={cause.image}
                        alt={cause.title}
                        className="h-44 w-full object-cover sm:h-48 lg:h-52"
                      />
                      <span
                        className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow ${cause.percentColor}`}
                      >
                        {cause.percent}
                      </span>
                    </div>
 
                    {/* Body */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h3 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                        {cause.title}
                      </h3>
 
                   
 
                      <p className="mb-4 flex flex-wrap gap-x-1 text-xs text-gray-500 sm:mb-5 sm:text-sm">
                        <span className="font-semibold text-gray-700">
                        </span>
                        <span className={`font-semibold ${cause.goalColor}`}>
                        </span>
                      </p>
 
                      <button
                        onClick={() => navigate("/donations")}
                        className={`mt-auto flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow transition-all duration-200 sm:px-6 sm:py-3 ${cause.btnColor}`}
                      >
                        Donate Now
                        <svg
                          className="h-4 w-4"
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
                </div>
              ))}
            </div>
          </div>
 
          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
            <button
              onClick={slidePrev}
              disabled={current === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1a7a5e] text-[#1a7a5e] transition-all duration-200 hover:bg-[#1a7a5e] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:h-12 sm:w-12"
              aria-label="Previous"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
 
            <button
              onClick={slideNext}
              disabled={current === maxIndex}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1a7a5e] text-[#1a7a5e] transition-all duration-200 hover:bg-[#1a7a5e] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:h-12 sm:w-12"
              aria-label="Next"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default DonationCauses;
 