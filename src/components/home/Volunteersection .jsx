import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Be the Change – Volunteer With Us",
    description:
      "Your time and skills can create a meaningful impact in someone’s life. Join our mission to support communities, educate children, and bring positive change. Whether you can help online or on-ground, every effort counts.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&q=80&fit=crop",
    accentSide: "right", // gold triangle on right
    path: "/become-volunteer",
    btnText: "Become a Volunteer",
  },
  {
    id: 2,
    title: "Your Contribution Matters",
    description:
      "Your generous support helps us reach those who need it the most. Every donation contributes to education, healthcare, and community development. You can easily donate using bank transfer or UPI and share your details with us.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80&fit=crop",
    accentSide: "right",
    path: "/donations",
    btnText: "Donate Now",
  },
];

const VolunteerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f5f0e8] py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Two Volunteer Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-center items-center text-center px-10 py-12 shadow-xl"
            >
              {/* Background photo */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gray-900/75" />

              {/* Gold triangle accent — bottom right */}
              <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                <svg
                  viewBox="0 0 220 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-52 h-52"
                >
                  <path d="M220 0 L220 220 L0 220 Z" fill="#f59e0b" opacity="0.55" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
                  {card.description}
                </p>
                <button
                  onClick={() => navigate(card.path)}
                  className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  {card.btnText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Heading ── */}
        <div className="text-center">
          <h2
            className="text-gray-900 font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            See Your Impact: Transparent
            <br />
            Donation Causes
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;