import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const causes = [
  {
    id: 1,
    image: "data:image/jpeg;base64,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",
    percent: "2.57%",
    percentColor: "bg-[#1a7a5e]",
    title: "Clean Drinking Water Facilities",
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
    title: "Education & Skill Devlopment",
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
    title: "Farmer Empowerment",
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
    title: "Women Skill Devlopment",
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
    title: "Envirentmental Devlopement",
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
    title: "Ruler&Urban Development",
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
