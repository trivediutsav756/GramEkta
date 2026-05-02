import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import avtar1 from '../../assets/avtar.png';
import avtar2 from '../../assets/avtar2.png';
import avtar3 from '../../assets/avtar3.png';

const VOLUNTEERS = [
  { id: 1, name: "Kiran R. Fale", role: "Director", image: avtar3 },
  { id: 2, name: "Madan D. Thombare", role: "Secretary", image: avtar1 },
  { id: 3, name: "Sagar S. Sutar", role: "Treasurer", image: avtar2 },
];

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const wrap = (index, total) => ((index % total) + total) % total;

const OurVolunteers = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const intervalRef = useRef(null);
  const total = VOLUNTEERS.length;

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (dir) => {
    setPage(([p]) => [p + dir, dir]);
  };

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => paginate(1), 2500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Build array of visible card indices
  const activeIndex = wrap(page, total);
  const visibleIndices = Array.from(
    { length: visibleCount },
    (_, i) => wrap(activeIndex + i, total)
  );

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const cardWidth =
    visibleCount === 1
      ? "100%"
      : visibleCount === 2
        ? "calc((100% - 24px) / 2)"
        : "calc((100% - 48px) / 3)";

  const renderCard = (volunteer) => (
    <div className="relative mx-auto w-full">
      {/* Image Section */}
      <div className="relative z-[2] overflow-visible">
        <div className="mx-auto w-[82%] rounded-t-[34px] rounded-b-[130px] bg-[#dddddd]">
          <img
            src={volunteer.image}
            alt={volunteer.name}
            className="h-[185px] w-full rounded-t-[34px] rounded-b-[130px] object-contain object-center p-4"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(volunteer.name)}&background=1b7561&color=fff&bold=true`;
            }}
          />
        </div>
        {/* Plus Button */}
        <div className="absolute bottom-0 left-1/2 z-[10] flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#1b7561] shadow-lg transition-all duration-300 group-hover:bg-[#f3b300]">
          <span className="text-[32px] font-light leading-none text-white">+</span>
        </div>
      </div>

      {/* Content Card */}
      <div className="relative z-[1] -mt-8 flex h-[170px] flex-col items-center justify-start rounded-t-[90px] rounded-b-[28px] bg-[#d9e3e0] px-4 pb-6 pt-12 text-center shadow-sm transition-all duration-300 group-hover:bg-[#073d34]">
        <h3 className="text-[20px] font-extrabold leading-tight text-[#1f1f1f] transition-colors duration-300 group-hover:text-white sm:text-[22px]">
          {volunteer.name}
        </h3>
        <p className="mt-3 text-sm text-[#8f969b] transition-colors duration-300 group-hover:text-[#f3b300] sm:text-base">
          {volunteer.role}
        </p>
      </div>
    </div>
  );

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
          onClick={() => { paginate(-1); startAuto(); }}
          aria-label="Previous"
          className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1b7561] text-white shadow-md transition hover:bg-[#145746] sm:left-3 sm:h-12 sm:w-12 lg:left-0 lg:h-14 lg:w-14"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => { paginate(1); startAuto(); }}
          aria-label="Next"
          className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1b7561] text-white shadow-md transition hover:bg-[#145746] sm:right-3 sm:h-12 sm:w-12 lg:right-0 lg:h-14 lg:w-14"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Viewport */}
        <div className="overflow-hidden px-12 sm:px-16 lg:px-20">
          <div className="flex gap-6">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {visibleIndices.map((volIndex, i) => {
                const volunteer = VOLUNTEERS[volIndex];
                return (
                  <motion.div
                    key={`${page}-${i}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="group shrink-0"
                    style={{ width: cardWidth, minWidth: cardWidth }}
                  >
                    {renderCard(volunteer)}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {VOLUNTEERS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const dir = i > activeIndex ? 1 : -1;
                setPage([i, dir]);
                startAuto();
              }}
              className={`h-2.5 rounded-full border-none transition-all duration-200 ${activeIndex === i ? "w-6 bg-[#1b7561]" : "w-2.5 bg-[#c4ccc9]"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVolunteers;