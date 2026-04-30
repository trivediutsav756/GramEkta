import React from "react";

const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=800&auto=format&fit=crop&q=80",
    alt: "Children standing together outdoors",
    title: "Community Support",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    alt: "Students learning in a classroom",
    title: "Education Program",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80",
    alt: "Healthcare checkup in a rural area",
    title: "Health Initiative",
  },
];

export default function RecentProjects() {
  return (
    <section id="recent-projects" className="relative overflow-hidden bg-[#f8f6f1] py-8 px-4 sm:px-6">
      {/* paper texture feel – reduced intensity */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.04)_0,transparent_22%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.03)_0,transparent_18%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.02)_0,transparent_20%)]" />

      {/* decorative doodles – reduced sizes */}
      <div className="absolute left-[61%] top-0 hidden xl:block pointer-events-none opacity-60">
        <svg width="100" height="160" viewBox="0 0 130 210" fill="none">
          <path
            d="M92 4C76 20 64 40 68 64C71 82 86 98 82 118C76 148 42 156 40 188"
            stroke="#7ca79c"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M54 0C70 10 76 20 80 34"
            stroke="#7ca79c"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-0 hidden xl:block pointer-events-none opacity-60">
        <svg width="200" height="130" viewBox="0 0 270 170" fill="none">
          <path
            d="M10 12C24 36 40 40 54 12"
            stroke="#efb44f"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M38 4V36"
            stroke="#efb44f"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M80 10C90 28 98 34 114 14"
            stroke="#e5a7a0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M126 14C136 34 144 38 158 16"
            stroke="#f0c65f"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M176 12C184 28 194 36 208 18"
            stroke="#eaa18b"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M226 26C244 10 266 20 268 42C270 64 250 76 228 66C208 58 204 34 226 26Z"
            stroke="#efc1b3"
            strokeWidth="1.8"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1300px] pt-6 pb-12">
        {/* header – smaller text */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-[cursive] text-[18px] sm:text-[20px] leading-none text-[#e7a520]">
                Complete Projects
              </span>
              <span className="h-[2px] w-10 bg-[#e7a520]" />
            </div>

            <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] font-extrabold tracking-[-0.02em] text-[#171717] leading-[1.1]">
              Our Recent Project
            </h2>
          </div>

          <div className="lg:pt-1">
            <button className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#1d7569] px-6 py-2 text-[14px] font-semibold text-white transition hover:bg-[#155c52] active:scale-[0.98]">
              View All Project
            </button>
          </div>
        </div>

        {/* cards – smaller gap, smaller image ratio */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <div className="relative aspect-[1.1/1] overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width="600"
                  height="600"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
