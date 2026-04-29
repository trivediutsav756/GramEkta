import React from "react";
import leftHandImg from "../../assets/left_hand.png";
import rightHandImg from "../../assets/right_hand.png";

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b3b36] py-16 sm:py-20 lg:py-24 min-h-[420px]">
      {/* Top-left orange semi circle */}
      <div className="absolute -top-10 left-8 h-20 w-40 rounded-b-full bg-[#f05a28]" />

      {/* Top-right yellow dots */}
      <div className="absolute right-20 top-4 z-[2] hidden grid-cols-2 gap-3 sm:grid">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="h-3 w-3 rounded-full bg-[#f4b400]" />
        ))}
      </div>

      {/* Top-right green abstract shape */}
      <div className="absolute right-0 top-0 z-[1] hidden sm:block">
        <div
          className="h-28 w-52 rounded-bl-[90px] bg-[#1d6f63]"
          style={{ borderTopLeftRadius: "120px" }}
        />
      </div>

      {/* Heart */}
      <div className="absolute right-10 top-14 z-[2] hidden sm:block">
        <svg width="56" height="50" viewBox="0 0 40 36" fill="none">
          <path
            d="M20 34S2 22 2 11a9 9 0 0118 0 9 9 0 0118 0c0 11-18 23-18 23z"
            fill="#f4b400"
          />
        </svg>
      </div>

      {/* Left Hand */}
      <img
        src={leftHandImg}
        alt="Left supporting hand"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] w-[220px] sm:w-[300px] md:w-[360px] lg:w-[430px] xl:w-[480px] select-none object-contain"
      />

      {/* Right Hand */}
      <img
        src={rightHandImg}
        alt="Right supporting hand"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] w-[220px] sm:w-[300px] md:w-[360px] lg:w-[430px] xl:w-[480px] select-none object-contain"
      />

      {/* Center content */}
      <div className="relative z-[3] mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <h2 className="max-w-4xl text-white text-3xl font-extrabold leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_3px_0_rgba(0,0,0,0.18)]">
          Our Door Are Always Open To
          <br />
          More People Who Want To
          <br />
          Support Each Others!
        </h2>

        {/* Arrows row */}
        <div className="mt-6 hidden w-full max-w-6xl items-center justify-between px-10 md:flex lg:px-20">
          {/* Left Arrow */}
          <svg
            width="260"
            height="110"
            viewBox="0 0 260 110"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M8 95 C 18 35, 75 30, 110 50 S 190 78, 240 40"
              stroke="#f4b400"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M225 28 C 245 38, 245 62, 223 68"
              stroke="#f4b400"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M228 32 L244 40 L230 50"
              stroke="#f4b400"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Right Arrow */}
          <svg
            width="260"
            height="110"
            viewBox="0 0 260 110"
            fill="none"
            className="shrink-0 scale-x-[-1]"
          >
            <path
              d="M8 95 C 18 35, 75 30, 110 50 S 190 78, 240 40"
              stroke="#f4b400"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M225 28 C 245 38, 245 62, 223 68"
              stroke="#f4b400"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M228 32 L244 40 L230 50"
              stroke="#f4b400"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f4b400] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#de9f00] sm:text-base">
          Get Involved <span className="text-lg">↗</span>
        </button>
      </div>
    </section>
  );
}
