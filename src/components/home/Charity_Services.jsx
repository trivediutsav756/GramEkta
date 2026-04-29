import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Rural & Urban Development",
    description:
      "We work to bridge the gap between rural and urban communities, building infrastructure, housing, and sustainable livelihoods for all.",
    arcColor: "#f3df95",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12" fill="none">
        <rect x="10" y="28" width="16" height="24" rx="2" fill="#176b5c" opacity="0.85" />
        <rect x="28" y="18" width="26" height="34" rx="2" fill="#176b5c" />
        <rect x="14" y="32" width="4" height="5" rx="1" fill="#fff" opacity="0.9" />
        <rect x="20" y="32" width="4" height="5" rx="1" fill="#fff" opacity="0.9" />
        <rect x="32" y="23" width="5" height="6" rx="1" fill="#fff" opacity="0.9" />
        <rect x="40" y="23" width="5" height="6" rx="1" fill="#fff" opacity="0.9" />
        <rect x="36" y="43" width="6" height="9" rx="1" fill="#fff" opacity="0.9" />
        <path d="M8 53H56" stroke="#eda726" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Clean Water & Sanitation",
    description:
      "Access to clean water is a fundamental right. We build wells, purification systems, and sanitation facilities in underserved communities.",
    arcColor: "#bfded8",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12" fill="none">
        <path d="M14 29Q22 21 32 29Q42 37 50 29" stroke="#176b5c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 37Q22 29 32 37Q42 45 50 37" stroke="#176b5c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 45Q22 37 32 45Q42 53 50 45" stroke="#176b5c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 10C32 10 22 22 22 30C22 37 26.7 42 32 42C37.3 42 42 37 42 30C42 22 32 10 32 10Z" fill="#176b5c" opacity="0.18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Education & Skill Dev.",
    description:
      "Explore our charity services to discover impactful projects, learning access, and practical opportunities that help people thrive and grow.",
    arcColor: "#f3df95",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12" fill="none">
        <polygon points="32,14 52,24 32,34 12,24" fill="#176b5c" />
        <rect x="18" y="30" width="28" height="18" rx="3" fill="#176b5c" opacity="0.16" />
        <rect x="26" y="32" width="12" height="10" rx="2" fill="#176b5c" opacity="0.85" />
        <path d="M52 24V36" stroke="#eda726" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="52" cy="38.5" r="3" fill="#eda726" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Farmer Empowerment",
    description:
      "We equip farmers with modern tools, training, and support to improve yields, sustainability, and economic independence.",
    arcColor: "#cce5df",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12" fill="none">
        <path d="M32 49V24" stroke="#176b5c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 32C32 32 22 26 18 18C26 16 34 22 32 32Z" fill="#176b5c" opacity="0.85" />
        <path d="M32 26C32 26 42 20 46 12C38 10 30 16 32 26Z" fill="#176b5c" opacity="0.65" />
        <path d="M20 50Q26 44 32 48Q38 44 44 50" stroke="#eda726" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Women’s Skill Development",
    description:
      "Empowering women through vocational programs, entrepreneurship support, and stronger community opportunity networks.",
    arcColor: "#e4e9e8",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12" fill="none">
        <circle cx="32" cy="20" r="9" fill="#176b5c" opacity="0.9" />
        <path d="M18 52C18 40 46 40 46 52" fill="#176b5c" opacity="0.72" />
        <path d="M32 43V56" stroke="#eda726" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M26 49H38" stroke="#eda726" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Environmental Development",
    description:
      "From reforestation to clean energy awareness, we support sustainable practices that protect communities and future generations.",
    arcColor: "#f3df95",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12" fill="none">
        <circle cx="32" cy="32" r="18" fill="#176b5c" opacity="0.12" />
        <path d="M32 48V28" stroke="#176b5c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 36C32 36 24 30 20 22C28 18 36 26 32 36Z" fill="#176b5c" opacity="0.86" />
        <path d="M32 30C32 30 40 24 44 16C36 12 28 20 32 30Z" fill="#176b5c" opacity="0.66" />
        <path d="M20 46Q26 40 32 44Q38 40 44 46" stroke="#eda726" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const getPerView = (width) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

export default function HumanistServicesSlider() {
  const [perView, setPerView] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setPerView(getPerView(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideWidth = 100 / perView;
  const duplicatedServices = [...services, ...services];

  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${services.length * slideWidth}%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="pointer-events-none absolute left-4 top-6 hidden md:block opacity-80">
        <svg viewBox="0 0 140 180" className="h-24 w-20">
          <path
            d="M58 18C54 6 38 5 34 18C29 7 12 10 12 26C12 41 28 48 36 57C45 49 60 41 60 26C60 17 54 14 58 18Z"
            stroke="#176b5c"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M86 88C82 76 66 75 62 88C57 77 40 80 40 96C40 111 56 118 64 127C73 119 88 111 88 96C88 87 82 84 86 88Z"
            stroke="#eda726"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* tighter heading spacing */}
        <div className="mb-5 text-center sm:mb-7 lg:mb-8">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#efc14b]" />
            <span className="text-sm font-medium italic text-[#e1aa26] sm:text-base">
              Our Focus Areas
            </span>
            <span className="h-px w-10 bg-[#efc14b]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[#181818] sm:text-4xl lg:text-5xl">
            We Do It For All People
            <br />
            Humanist Services
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[34px]">
            {/* reduced top padding so cards come closer to title */}
            <div className="pt-9 sm:pt-10">
              <div className="flex animate-infinite-scroll">
                {duplicatedServices.map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className="shrink-0 px-3"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <article className="relative mx-auto flex min-h-[340px] h-full flex-col items-center rounded-[28px] bg-white px-5 pb-8 pt-24 text-center shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:min-h-[360px] sm:px-7 sm:pt-24">
                      {/* moved icon/logo slightly upward for cleaner overlap */}
                      <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-[36%] flex-col items-center">
                        <div
                          className="h-14 w-28 rounded-t-full sm:h-16 sm:w-32"
                          style={{ backgroundColor: service.arcColor }}
                        />
                        <div
                          className="absolute top-7 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#efe9df] shadow-[0_8px_18px_rgba(0,0,0,0.06)] sm:top-8 sm:h-[78px] sm:w-[78px]"
                          style={{ backgroundColor: service.iconBg }}
                        >
                          {service.icon}
                        </div>
                      </div>

                      {/* title pushed slightly lower so no overlap */}
                      <h3 className="mb-4 mt-1 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1c1c] sm:text-[24px] lg:text-[28px]">
                        {service.title}
                      </h3>

                      <p className="mb-7 text-sm leading-7 text-[#7b7b7b] sm:text-[15px]">
                        {service.description}
                      </p>

                      <button 
                        onClick={() => {
                          if (service.title === "Clean Water & Sanitation") {
                            navigate("/services/clean-water");
                          } else if (service.title === "Rural & Urban Development") {
                            navigate("/services/rural-urban");
                          } else if (service.title === "Education & Skill Dev.") {
                            navigate("/services/education-skill");
                          } else if (service.title === "Farmer Empowerment") {
                            navigate("/services/farmer-empowerment");
                          } else if (service.title === "Women’s Skill Development") {
                            navigate("/services/women-skill");
                          } else if (service.title === "Environmental Development") {
                            navigate("/services/environment");
                          }
                        }}
                        className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#efb22d] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#dc9d13] focus:outline-none focus:ring-2 focus:ring-[#efb22d] focus:ring-offset-2"
                      >
                        Learn More
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.3"
                          className="h-4 w-4"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}