import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80&fit=crop",
    tag: "Welcome to Donat Charity",
    title: "Every Donation Counts\nEvery Heart Matters",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80&fit=crop",
    tag: "Make a Difference Today",
    title: "Together We Can\nChange The World",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 500);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Background Images */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}

        {/* White paint splash – bottom left decoration */}
        <div className="absolute bottom-0 left-0 w-72 h-56 pointer-events-none select-none z-10">
          <svg
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0 240 C20 200, 60 210, 80 180 C100 150, 60 130, 90 100 C120 70, 160 110, 180 80 C200 50, 170 20, 200 0 L0 0 Z"
              fill="white"
              fillOpacity="0.18"
            />
            <path
              d="M0 240 C30 220, 70 230, 100 200 C130 170, 90 150, 120 120 C150 90, 190 130, 200 100"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.12"
              fill="none"
            />
          </svg>
        </div>

        {/* SLIDE CONTENT */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(16px)" : "translateY(0)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Tag line */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-10 h-px bg-yellow-400" />
            <span
              className="text-yellow-400 text-lg font-medium italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {slide.tag}
            </span>
            <span className="block w-10 h-px bg-yellow-400" />
          </div>

          {/* Main heading */}
          <h1
            className="text-white font-extrabold leading-tight mb-10"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              whiteSpace: "pre-line",
            }}
          >
            {slide.title}
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const section = document.getElementById('recent-projects');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate("/donations");
                }
              }}
              className="flex items-center gap-2 bg-[#1a7a5e] hover:bg-[#155f49] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Discover Now
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

            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 text-yellow-400 ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>

        {/* PREV / NEXT ARROWS */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
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
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
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
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Charity Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
