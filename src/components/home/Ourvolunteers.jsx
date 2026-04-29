import { useState, useEffect, useRef } from "react";
import girl from '../../assets/girl.png'
import boy from '../../assets/boy.png'
import boy2 from '../../assets/boy2.png'
import boy3 from '../../assets/boy3.png'
import boy4 from '../../assets/boy4.png'
const volunteers = [
  {
    id: 1,
    name: "Daniel Thomas",
    role: "Volunteer",
    image:
      girl,
  },
  {
    id: 2,
    name: "Michel Connor",
    role: "Volunteer",
    image:
      boy,
  },
  {
    id: 3,
    name: "Joseph Alexander",
    role: "Volunteer",
    image:
      boy2,
  },
  {
    id: 4,
    name: "Jessica Lauren",
    role: "Volunteer",
    image:
      boy3,
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Volunteer",
    image:
      boy4,
  },
  {
    id: 6,
    name: "Marcus Johnson",
    role: "Volunteer",
    image:
      boy,
  },
];

const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
};

const OurVolunteers = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const intervalRef = useRef(null);
  const total = volunteers.length;

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setCurrent(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(total - visibleCount, 0);

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goTo = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  return (
    <section className="w-full overflow-hidden bg-[#f3f3f3] py-14 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="mb-10 px-4 text-center sm:mb-14">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="block h-[2px] w-10 bg-[#e0a800] sm:w-14" />
          <span
            className="text-base font-semibold italic text-[#e0a800] sm:text-lg"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our Volunteer
          </span>
          <span className="block h-[2px] w-10 bg-[#e0a800] sm:w-14" />
        </div>

        <h2
          className="font-extrabold leading-[1.1] text-[#1e1e1e]"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3.6rem)" }}
        >
          Meet The Optimistic Volunteer
        </h2>
      </div>

      {/* Slider */}
      <div className="relative mx-auto max-w-[1450px]">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1b7561] text-white shadow-md transition hover:bg-[#145746] sm:left-3 sm:h-12 sm:w-12 lg:left-0 lg:h-14 lg:w-14"
        >
          <svg
            className="h-5 w-5"
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

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1b7561] text-white shadow-md transition hover:bg-[#145746] sm:right-3 sm:h-12 sm:w-12 lg:right-0 lg:h-14 lg:w-14"
        >
          <svg
            className="h-5 w-5"
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

        {/* Viewport */}
        <div className="overflow-hidden px-12 sm:px-16 lg:px-20">
          {/* Track */}
          <div
            className="flex gap-4 sm:gap-5 lg:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
            }}
          >
            {volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="group shrink-0"
                style={{
                  width:
                    visibleCount === 1
                      ? "100%"
                      : visibleCount === 2
                        ? "calc((100% - 20px) / 2)"
                        : "calc((100% - 72px) / 4)",
                }}
              >
                <div className="relative mx-auto w-full">
                  {/* Top Image Section */}
                  <div className="relative z-[2] overflow-visible">
                    <div className="mx-auto w-[82%] rounded-t-[34px] rounded-b-[130px] bg-[#dddddd]">
                      <img
                        src={volunteer.image}
                        alt={volunteer.name}
                        className="h-[185px] w-full object-cover object-top rounded-t-[34px] rounded-b-[130px]"
                      />
                    </div>

                    {/* Plus Button */}
                    <div className="absolute bottom-0 left-1/2 z-[10] flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#1b7561] shadow-lg transition-all duration-300 group-hover:bg-[#f3b300]">
                      <span className="text-[32px] font-light leading-none text-white">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-[1] -mt-8 flex h-[170px] flex-col items-center justify-start rounded-t-[90px] rounded-b-[28px] bg-[#d9e3e0] px-4 pb-6 pt-12 text-center shadow-sm transition-all duration-300 group-hover:bg-[#073d34]">
                    <h3 className="text-[20px] font-extrabold leading-tight text-[#1f1f1f] transition-colors duration-300 group-hover:text-white sm:text-[22px]">
                      {volunteer.name}
                    </h3>

                    <p className="mt-3 text-sm text-[#8f969b] transition-colors duration-300 group-hover:text-[#f3b300] sm:text-base">
                      {volunteer.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVolunteers;
