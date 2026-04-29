import React, { useState } from "react";

const stats = [
  { value: "15K+", label: "Incredible Volunteers", highlight: true },
  { value: "1K+", label: "Successful Campaigns", highlight: false },
  { value: "400+", label: "Monthly Donors", highlight: false },
  { value: "35K+", label: "Team Support", highlight: true },
];

const testimonials = [
  {
    id: 1,
    name: "Mustafa Kamal",
    role: "CEO, Founder",
    rating: 5.0,
    quote:
      "Stay informed about our upcoming events and campaigns. Whether it's a fundraising gala, a charity run, or a community outreach program, there are plenty of ways to get involved and support our cause. Check our event calendar for details. We prioritize your security. Our donation process uses the latest encryption technology to protect your personal and financial information. Donate with confidence knowing",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Volunteer Coordinator",
    rating: 4.9,
    quote:
      "Being part of this foundation has been the most rewarding experience of my life. The team is incredibly dedicated and every program is thoughtfully designed to create real, lasting impact in the communities we serve. I am proud to stand behind this mission every single day.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Corporate Donor",
    rating: 5.0,
    quote:
      "Our company has partnered with Gram Ekta Foundation for three years now, and the transparency and accountability they bring is unmatched. We see exactly where our contributions go and the stories of change coming back are genuinely moving. Highly recommend supporting this cause.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    id: 4,
    name: "Ananya Patel",
    role: "Community Leader",
    rating: 4.8,
    quote:
      "The programs run by this foundation have transformed our village. Clean water, education for our children, and health camps — things we only dreamed of. The team truly listens to our needs and works alongside us, not just for us. Words cannot express our gratitude.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
];

const projects = [
  {
    id: 1,
    title: "Compassion Connect",
    subtitle: "Stronger Community",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80",
    grayscale: true,
    hasLabel: true,
  },
  {
    id: 2,
    title: "Education for All",
    subtitle: "Brighter Futures",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=700&q=80",
    grayscale: false,
    hasLabel: false,
  },
  {
    id: 3,
    title: "Health Outreach",
    subtitle: "Care for Everyone",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80",
    grayscale: false,
    hasLabel: false,
  },
];

function SectiionNew() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 320);
  };

  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length, "prev");
  const next = () => goTo((current + 1) % testimonials.length, "next");

  const t = testimonials[current];
  const total = testimonials.length;
  const progress = ((current + 1) / total) * 100;

  return (
    <div>
      <section
        style={{
          background: "#1A685B",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        {/* ── Brush stroke decorations ── */}
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "120px",
            opacity: 0.18,
            pointerEvents: "none",
          }}
          viewBox="0 0 120 600"
          preserveAspectRatio="none"
        >
          <path
            d="M20,0 Q80,80 30,160 Q-10,240 60,320 Q110,400 20,480 Q-20,540 40,600 L0,600 L0,0Z"
            fill="#fff"
          />
        </svg>
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            height: "60%",
            width: "90px",
            opacity: 0.13,
            pointerEvents: "none",
          }}
          viewBox="0 0 90 400"
          preserveAspectRatio="none"
        >
          <path
            d="M90,0 Q30,60 70,140 Q110,220 40,300 Q10,360 90,400 L90,0Z"
            fill="#fff"
          />
        </svg>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "520px",
          }}
          className="help-grid"
        >
          {/* ── LEFT: Text + Stats ── */}
          <div
            style={{
              padding: "72px 48px 72px 64px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
            }}
            className="help-left"
          >
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.2,
                margin: "0 0 20px",
                letterSpacing: "-0.3px",
              }}
            >
              We Always Help The
              <br />
              Needy People
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                margin: "0 0 40px",
                maxWidth: "400px",
              }}
            >
              Discover the inspiring stories of individuals and communities
              transformed by our programs. Our success stories highlight the
              real-life impact of your donations.
            </p>

            {/* Stats grid 2x2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                borderTop: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    padding: "24px 16px 24px 0",
                    borderBottom:
                      i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
                    borderRight:
                      i % 2 === 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
                    paddingLeft: i % 2 === 1 ? "24px" : "0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(26px, 3vw, 36px)",
                      fontWeight: 900,
                      color: s.highlight ? "#FFAC00" : "#fff",
                      lineHeight: 1,
                      marginBottom: "6px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 600,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image + Play button ── */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "400px",
            }}
            className="help-right"
          >
            {/* Image — use your own src here */}
            <img
              src="https://wordpress.themehour.net/donat/wp-content/uploads/2024/10/video-thumb1-1-2-1.png"
              alt="Communities we help"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                filter: "grayscale(30%)",
              }}
            />

            {/* Dark overlay for depth */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(26,104,91,0.35) 0%, transparent 50%)",
              }}
            />

            {/* White brush stroke overlay right edge */}
            <svg
              aria-hidden="true"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: "80px",
                opacity: 0.22,
                pointerEvents: "none",
              }}
              viewBox="0 0 80 600"
              preserveAspectRatio="none"
            >
              <path
                d="M80,0 Q20,100 60,200 Q90,300 30,400 Q0,480 80,600 L80,0Z"
                fill="#fff"
              />
            </svg>

            {/* Play button centered */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                aria-label="Play video"
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.92)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                  transition: "transform 0.2s, background 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.92)";
                }}
              >
                {/* Play triangle */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A685B">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Responsive styles ── */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700;900&display=swap');
        @media (max-width: 768px) {
          .help-grid {
            grid-template-columns: 1fr !important;
          }
          .help-left {
            padding: 48px 24px 40px !important;
          }
          .help-right {
            min-height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          .help-left {
            padding: 40px 20px 32px !important;
          }
        }
      `}</style>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700;900&display=swap');

        .testi-section {
          background: #fff;
          padding: 80px 24px 80px;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* ── Decorative blot ── */
        .testi-blot {
          position: absolute;
          left: -30px;
          top: 160px;
          width: 260px;
          height: 320px;
          background: #1A685B;
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          opacity: 0.13;
          pointer-events: none;
        }

        /* ── Header ── */
        .testi-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .testi-label-line {
          width: 40px; height: 1.5px;
          background: #FFAC00;
        }
        .testi-label-text {
          font-size: 16px;
          font-style: italic;
          color: #FFAC00;
          font-weight: 700;
          letter-spacing: 0.3px;
        }
        .testi-heading {
          text-align: center;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 900;
          color: #0f1f1a;
          line-height: 1.2;
          margin: 0 0 56px;
        }

        /* ── Card area ── */
        .testi-card-area {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 380px 1fr;
          align-items: center;
          gap: 0;
          position: relative;
        }

        /* ── Image side ── */
        .testi-img-wrap {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 2;
        }
        .testi-img-circle {
          width: 320px;
          height: 360px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }
        .testi-img-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: opacity 0.32s ease;
        }
        .testi-img-circle img.fade { opacity: 0; }

        /* Rating badge */
        .testi-rating-badge {
          position: absolute;
          top: 48px;
          left: 0px;
          background: #1A685B;
          color: #fff;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          gap: 1px;
          box-shadow: 0 4px 16px rgba(26,104,91,0.3);
          z-index: 3;
        }
        .testi-rating-badge .star { color: #FFAC00; font-size: 14px; }

        /* ── Quote card ── */
        .testi-quote-card {
          background: #fdf8ee;
          border-radius: 20px;
          padding: 44px 44px 36px;
          position: relative;
          margin-left: -40px;
          z-index: 1;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .testi-quote-card.slide-out-next  { opacity: 0; transform: translateX(30px); }
        .testi-quote-card.slide-out-prev  { opacity: 0; transform: translateX(-30px); }
        .testi-quote-card.slide-in        { opacity: 1; transform: translateX(0); }

        .testi-quote-text {
          font-size: 15px;
          color: #374151;
          line-height: 1.8;
          margin: 0 0 28px;
        }
        .testi-quote-text::before { content: '"'; }
        .testi-quote-text::after  { content: '"'; }

        .testi-quote-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .testi-name {
          font-size: 18px;
          font-weight: 900;
          color: #0f1f1a;
          margin: 0 0 3px;
        }
        .testi-role {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
        }

        /* Quote icon */
        .testi-quote-icon {
          opacity: 0.25;
          flex-shrink: 0;
        }

        /* ── Controls ── */
        .testi-controls {
          max-width: 1100px;
          margin: 36px auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0 0 380px;
        }
        .testi-nav {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .testi-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid #d1d5db;
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          transition: all 0.2s;
          font-size: 16px;
        }
        .testi-nav-btn:hover {
          border-color: #1A685B;
          background: #1A685B;
          color: #fff;
        }

        /* Progress */
        .testi-progress {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          justify-content: flex-end;
        }
        .testi-progress-num {
          font-size: 22px;
          font-weight: 900;
          color: #1A685B;
          min-width: 28px;
        }
        .testi-progress-num.muted {
          font-size: 14px;
          color: #9ca3af;
          font-weight: 600;
        }
        .testi-progress-bar {
          flex: 1;
          height: 3px;
          background: #e5e7eb;
          border-radius: 2px;
          overflow: hidden;
          max-width: 220px;
        }
        .testi-progress-fill {
          height: 100%;
          background: #FFAC00;
          border-radius: 2px;
          transition: width 0.4s ease;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .testi-card-area {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .testi-img-wrap {
            justify-content: center;
            margin-bottom: -60px;
          }
          .testi-img-circle { width: 240px; height: 270px; }
          .testi-quote-card {
            margin-left: 0;
            padding: 72px 28px 32px;
            border-radius: 16px;
          }
          .testi-controls { padding: 0; }
          .testi-rating-badge { left: 50%; transform: translateX(-140px); top: 20px; }
        }
        @media (max-width: 540px) {
          .testi-section { padding: 60px 16px 60px; }
          .testi-img-circle { width: 190px; height: 220px; }
          .testi-quote-card { padding: 68px 20px 28px; }
          .testi-quote-text { font-size: 13px; }
          .testi-controls { flex-direction: column; gap: 20px; align-items: flex-start; }
          .testi-progress { justify-content: flex-start; }
        }
      `}</style>

      <section className="testi-section">
        {/* Decorative ink blot */}
        <div className="testi-blot" />

        {/* Header */}
        <div className="testi-label-row">
          <div className="testi-label-line" />
          <span className="testi-label-text">Testimonials</span>
          <div className="testi-label-line" />
        </div>
        <h2 className="testi-heading">
          What People Say About
          <br />
          Our Charity
        </h2>

        {/* Card area */}
        <div className="testi-card-area">
          {/* Image */}
          <div className="testi-img-wrap">
            {/* Rating badge */}
            <div className="testi-rating-badge">
              <span className="star">★</span>
              <span>{t.rating.toFixed(1)}</span>
            </div>

            <div className="testi-img-circle">
              <img
                src={t.image}
                alt={t.name}
                className={animating ? "fade" : ""}
              />
            </div>
          </div>

          {/* Quote card */}
          <div
            className={`testi-quote-card ${
              animating
                ? direction === "next"
                  ? "slide-out-next"
                  : "slide-out-prev"
                : "slide-in"
            }`}
          >
            <p className="testi-quote-text">{t.quote}</p>

            <div className="testi-quote-bottom">
              <div>
                <p className="testi-name">{t.name}</p>
                <p className="testi-role">{t.role}</p>
              </div>

              {/* Quote icon */}
              <svg
                className="testi-quote-icon"
                width="52"
                height="40"
                viewBox="0 0 52 40"
                fill="none"
              >
                <path
                  d="M0 40V24C0 10.745 8.05 3.013 24.15 0L26.4 3.9C19.2 5.55 14.9 9.05 13.5 14.4H22V40H0ZM30 40V24C30 10.745 38.05 3.013 54.15 0L56.4 3.9C49.2 5.55 44.9 9.05 43.5 14.4H52V40H30Z"
                  fill="#1A685B"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="testi-controls">
          {/* Nav buttons */}
          <div className="testi-nav">
            <button
              className="testi-nav-btn"
              onClick={prev}
              aria-label="Previous"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="testi-nav-btn" onClick={next} aria-label="Next">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Progress */}
          <div className="testi-progress">
            <span className="testi-progress-num">
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="testi-progress-bar">
              <div
                className="testi-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="testi-progress-num muted">
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700;900&family=Caveat:wght@700&display=swap');

        .rp-section {
          background: #faf6ef;
          padding: 72px 24px 80px;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* ── Texture dots background ── */
        .rp-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d4c9b0 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.35;
          pointer-events: none;
        }

        .rp-inner {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── Header row ── */
        .rp-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .rp-header-left {}
        .rp-label-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .rp-label {
          font-family: 'Caveat', cursive;
          font-size: 18px;
          font-weight: 700;
          color: #FFAC00;
          letter-spacing: 0.3px;
        }
        .rp-label-line {
          width: 44px;
          height: 1.5px;
          background: #FFAC00;
        }
        .rp-heading {
          font-size: clamp(24px, 3.5vw, 38px);
          font-weight: 900;
          color: #0f1f1a;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .rp-view-btn {
          background: #1A685B;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          letter-spacing: 0.3px;
          transition: background 0.2s, transform 0.2s;
          font-family: 'Lato', sans-serif;
        }
        .rp-view-btn:hover {
          background: #145248;
          transform: translateY(-2px);
        }

        /* ── Decorative hands SVG top-right ── */
        .rp-deco {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 280px;
          opacity: 0.5;
          pointer-events: none;
        }

        /* ── Grid ── */
        .rp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .rp-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          aspect-ratio: 3/3.6;
          background: #e0d8c8;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .rp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.18);
        }

        .rp-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .rp-card:hover img { transform: scale(1.04); }

        /* Grayscale first card */
        .rp-card.gray img { filter: grayscale(100%); }
        .rp-card.gray:hover img { filter: grayscale(60%); }

        /* ── Paint-brush label ── */
        .rp-brush-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 20px 20px;
          z-index: 3;
        }
        .rp-brush-bg {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 90px;
          background: #FFAC00;
          clip-path: polygon(0 30%, 8% 0%, 92% 10%, 100% 0%, 100% 100%, 0 100%);
          z-index: 1;
        }
        .rp-brush-content {
          position: relative;
          z-index: 2;
        }
        .rp-card-title {
          font-size: 17px;
          font-weight: 900;
          color: #fff;
          margin: 0 0 3px;
          text-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
        .rp-card-sub {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          margin: 0;
          letter-spacing: 0.5px;
        }

        /* Hover overlay for cards without label */
        .rp-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,104,91,0.75) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          padding: 24px 20px;
        }
        .rp-card:hover .rp-hover-overlay { opacity: 1; }
        .rp-hover-text {
          color: #fff;
        }
        .rp-hover-title {
          font-size: 17px;
          font-weight: 900;
          margin: 0 0 3px;
        }
        .rp-hover-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.82);
          margin: 0;
          font-weight: 600;
          letter-spacing: 0.4px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .rp-grid { grid-template-columns: repeat(2, 1fr); }
          .rp-card:nth-child(3) { display: none; }
        }
        @media (max-width: 600px) {
          .rp-grid { grid-template-columns: 1fr; }
          .rp-card:nth-child(3) { display: block; }
          .rp-section { padding: 52px 16px 60px; }
          .rp-header { flex-direction: column; align-items: flex-start; }
          .rp-deco { width: 140px; opacity: 0.3; }
        }
      `}</style>

      <section className="rp-section">
        {/* Decorative hands illustration top-right */}
        <svg
          className="rp-deco"
          viewBox="0 0 300 200"
          fill="none"
          aria-hidden="true"
        >
          {/* Hand 1 */}
          <g transform="translate(20,20)">
            <path
              d="M20,80 Q15,40 25,10 Q30,5 35,10 Q38,40 36,70"
              stroke="#1A685B"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M36,70 Q34,35 42,8 Q47,3 52,8 Q53,38 50,68"
              stroke="#1A685B"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M50,68 Q50,38 56,12 Q61,7 66,12 Q65,42 62,70"
              stroke="#1A685B"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M18,80 Q10,75 12,90 Q20,110 40,115 Q60,118 70,105 Q75,95 68,82 L62,70"
              stroke="#1A685B"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="55" cy="55" r="5" fill="#FFAC00" opacity="0.7" />
            <circle cx="30" cy="45" r="3" fill="#e05c2a" opacity="0.6" />
          </g>
          {/* Hand 2 */}
          <g transform="translate(110,10)">
            <path
              d="M20,80 Q15,40 25,10 Q30,5 35,10 Q38,40 36,70"
              stroke="#FFAC00"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M36,70 Q34,35 42,8 Q47,3 52,8 Q53,38 50,68"
              stroke="#FFAC00"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M50,68 Q50,38 56,12 Q61,7 66,12 Q65,42 62,70"
              stroke="#FFAC00"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M18,80 Q10,75 12,90 Q20,110 40,115 Q60,118 70,105 Q75,95 68,82 L62,70"
              stroke="#FFAC00"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="45" cy="40" r="4" fill="#1A685B" opacity="0.5" />
            <path
              d="M35,130 Q50,140 65,135"
              stroke="#1A685B"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          </g>
          {/* Hand 3 */}
          <g transform="translate(200,25)">
            <path
              d="M20,80 Q15,40 25,10 Q30,5 35,10 Q38,40 36,70"
              stroke="#e05c2a"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M36,70 Q34,35 42,8 Q47,3 52,8 Q53,38 50,68"
              stroke="#e05c2a"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M50,68 Q50,38 56,12 Q61,7 66,12 Q65,42 62,70"
              stroke="#e05c2a"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M18,80 Q10,75 12,90 Q20,110 40,115 Q60,118 70,105 Q75,95 68,82 L62,70"
              stroke="#e05c2a"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="60" cy="50" r="4" fill="#FFAC00" opacity="0.7" />
          </g>
          {/* Floating leaves */}
          <path
            d="M100,160 Q110,145 125,155 Q115,170 100,160Z"
            fill="#1A685B"
            opacity="0.4"
          />
          <path
            d="M160,175 Q168,158 182,166 Q173,180 160,175Z"
            fill="#FFAC00"
            opacity="0.5"
          />
          <circle cx="90" cy="140" r="4" fill="#e05c2a" opacity="0.4" />
          <circle cx="200" cy="170" r="3" fill="#1A685B" opacity="0.4" />
        </svg>

        <div className="rp-inner">
          {/* Header */}
          <div className="rp-header">
            <div className="rp-header-left">
              <div className="rp-label-row">
                <span className="rp-label">Complete Projects</span>
                <div className="rp-label-line" />
              </div>
              <h2 className="rp-heading">Our Recent Project</h2>
            </div>
            <button className="rp-view-btn">View All Project</button>
          </div>

          {/* Grid */}
          <div className="rp-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className={`rp-card ${p.grayscale ? "gray" : ""}`}
              >
                <img src={p.image} alt={p.title} />

                {/* Paint-brush overlay label on first card */}
                {p.hasLabel && (
                  <div className="rp-brush-label">
                    <div className="rp-brush-bg" />
                    <div className="rp-brush-content">
                      <p className="rp-card-title">{p.title}</p>
                      <p className="rp-card-sub">{p.subtitle}</p>
                    </div>
                  </div>
                )}

                {/* Hover overlay for other cards */}
                {!p.hasLabel && (
                  <div className="rp-hover-overlay">
                    <div className="rp-hover-text">
                      <p className="rp-hover-title">{p.title}</p>
                      <p className="rp-hover-sub">{p.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default SectiionNew;
