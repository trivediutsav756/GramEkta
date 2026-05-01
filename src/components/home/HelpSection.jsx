import { useState, useEffect, useRef } from "react";

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

// ── Single stat cell (Tailwind version) ──────────────────────────────────────
function Stat({ value, suffix, label, gold, started }) {
  const count = useCounter(value, 1600, started);
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`font-sans text-[clamp(1.9rem,3vw,2.6rem)] font-black leading-none tracking-tighter ${gold ? "text-[#f5a800]" : "text-white"}`}
      >
        {count}
        {suffix}
      </span>
      <span className="font-sans text-[clamp(0.72rem,1.1vw,0.85rem)] font-semibold text-white/65 tracking-wide">
        {label}
      </span>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function HeroStats() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.25 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const stats = [
    { value: 15, suffix: "K+", label: "Incredible Volunteers", gold: true },
    { value: 1, suffix: "K+", label: "Successful Campaigns", gold: false },
    { value: 400, suffix: "+", label: "Monthly Donors", gold: false },
    { value: 35, suffix: "K+", label: "Team Support", gold: true },
  ];

  const IMG =
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80&auto=format&fit=crop";

  return (
    <section className="w-full bg-[#f5f0e8] font-sans">
      {/* Custom keyframe animations (ripple and fade-in) */}
      <style>{`
        @keyframes ripple-ring {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(1.65); opacity: 0;   }
          100% { transform: scale(1);   opacity: 0;   }
        }
        .play-ripple { animation: ripple-ring 2.2s ease-out infinite; }

        @keyframes hero-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hero-in { animation: hero-in 0.65s cubic-bezier(0.16,1,0.3,1) both; }

        @media (max-width: 1023px) {
          .hero-right-mobile { flex: 0 0 100% !important; min-height: 300px !important; }
          .hero-left-mobile  { padding: 40px 28px !important; }
        }
      `}</style>

      {/* Full‑width flex container */}
      <div
        ref={ref}
        className="hero-in relative flex flex-wrap min-h-[460px] w-full overflow-hidden"
      >
        {/* ───── LEFT GREEN PANEL ───── */}
        <div className="hero-left-mobile flex-1 basis-[380px] relative bg-[#17745f] flex items-center justify-center pt-[clamp(40px,5vw,64px)] pb-[clamp(40px,5vw,64px)] overflow-hidden min-w-0">
          {/* Centered content container (max‑w‑6xl) */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-[clamp(28px,5vw,56px)]">
            <div className="max-w-[460px]">
              <h2 className="text-white font-black leading-[1.22] mb-[clamp(12px,2vw,16px)] text-[clamp(1.65rem,2.8vw,2.5rem)]">
                We Always Help The
                <br />
                Needy People
              </h2>
              <p className="text-white text-[clamp(0.78rem,1.1vw,0.9rem)] leading-relaxed mb-[clamp(28px,4vw,42px)] max-w-[390px]">
                Discover the inspiring stories of individuals and communities
                transformed by our programs. Our success stories highlight the
                real-life impact of your donations.
              </p>
              <div className="grid grid-cols-2 max-w-[370px]">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`
                      ${i % 2 === 0 ? "pr-[clamp(14px,2.5vw,26px)]" : "pl-[clamp(14px,2.5vw,26px)]"}
                      ${i < 2 ? "pb-[clamp(14px,2vw,22px)]" : "pt-[clamp(14px,2vw,22px)]"}
                      ${i % 2 === 0 ? "border-r border-white/18" : ""}
                      ${i < 2 ? "border-b border-white/18" : ""}
                    `}
                  >
                    <Stat {...s} started={started} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ───── RIGHT IMAGE PANEL ───── */}
        <div className="hero-right-mobile flex-[0_0_50%] relative min-h-[340px] overflow-hidden">
          {/* Grayscale photo */}
          <img
            src={IMG}
            alt="Community impact"
            className="absolute inset-0 w-full h-full object-cover object-[center_25%] grayscale"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/6" />

          {/* Scroll‑to‑top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute bottom-4 right-4 w-[38px] h-[38px] rounded-full border-2 border-[#17745f] bg-transparent flex items-center justify-center cursor-pointer text-[#17745f] z-10 transition-all hover:bg-[#17745f] hover:text-white"
            aria-label="Scroll to top"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              width={16}
              height={16}
            >
              <path
                d="M12 19V5M5 12l7-7 7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* ───── CENTERED PLAY BUTTON (over entire hero) ───── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="group relative w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 pointer-events-auto hover:scale-110 focus:outline-none"
            style={{
              background: playing ? "#17745f" : "#fff",
              boxShadow: "0 6px 28px rgba(0,0,0,0.28)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FFAC00";
              e.currentTarget.style.boxShadow =
                "0 0 0 10px rgba(255,172,0,0.25), 0 6px 28px rgba(0,0,0,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = playing ? "#17745f" : "#fff";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.28)";
            }}
            aria-label={playing ? "Pause" : "Play"}
          >
            {!playing && (
              <span className="play-ripple absolute -inset-[7px] rounded-full border-2 border-white/50" />
            )}

            {playing ? (
              <svg viewBox="0 0 24 24" fill="white" width={24} height={24}>
                <rect x="5" y="4" width="4" height="16" rx="1" />
                <rect x="15" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
                <path
                  d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14z"
                  fill="#17745f"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
