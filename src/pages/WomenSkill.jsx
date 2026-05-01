import React, { useEffect } from "react";
import logo from "../assets/logo.jpeg";
import girlImg from "../assets/girl.png";
import { 
  Scissors, 
  Laptop, 
  Briefcase, 
  HeartPulse, 
  Users, 
  CircleDollarSign, 
  ShieldCheck, 
  Lightbulb,
  CheckCircle2,
  Zap,
  Award
} from "lucide-react";

const WomenSkill = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden text-gray-800 pt-1 md:pt-4">
      {/* Theme-Consistent Hero Banner */}
      <section className="relative bg-[#17745f] py-16 md:py-24">
        {/* Subtle Relatable Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src={girlImg} 
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#fcd34d] px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <Award size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Our Initiative 10</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 font-serif">
              Women's Skill <br />
              <span className="text-[#fcd34d]">Development</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed italic border-l-4 border-[#f5b000] pl-6 mx-auto lg:mx-0">
              "Empowering women through targeted skill training, livelihood programmes and entrepreneurship support — building confident, self-reliant women who lead their communities."
            </p>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Section 1: TRAINING & SKILLS */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#17745f]/5 px-6 py-3 rounded-full border border-[#17745f]/10">
              <Zap className="text-[#17745f] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#17745f] tracking-tight uppercase">Training & Skills</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Tailoring & Textile Crafts",
                  desc: "Stitching, embroidery, fabric printing and garment making for self-employment and small enterprise.",
                  icon: <Scissors className="w-6 h-6" />,
                },
                {
                  title: "Digital Literacy & Computer Skills",
                  desc: "Basic computing, internet use, digital payments and online business skills for modern livelihoods.",
                  icon: <Laptop className="w-6 h-6" />,
                },
                {
                  title: "Entrepreneurship Development",
                  desc: "Business planning, micro-enterprise setup, credit linkage and marketing skills for aspiring women entrepreneurs.",
                  icon: <Briefcase className="w-6 h-6" />,
                },
                {
                  title: "Health & Nutrition Education",
                  desc: "Maternal health, child nutrition, hygiene and community health worker training for healthier families.",
                  icon: <HeartPulse className="w-6 h-6" />,
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-[#17745f]/5 text-[#17745f] group-hover:bg-[#17745f] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#17745f] transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: EMPOWERMENT & IMPACT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#f5b000]/5 px-6 py-3 rounded-full border border-[#f5b000]/10">
              <CheckCircle2 className="text-[#f5b000] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#f5b000] tracking-tight uppercase">Empowerment & Impact</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Self-Help Group (SHG) Formation",
                  desc: "Forming and nurturing women SHGs for collective savings, credit access and mutual support.",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  title: "Livelihood & Income Generation",
                  desc: "Creating sustainable income opportunities through product development, market linkages and cooperatives.",
                  icon: <CircleDollarSign className="w-6 h-6" />,
                },
                {
                  title: "Legal Rights & Awareness",
                  desc: "Educating women on their legal rights, government welfare schemes and entitlements for personal empowerment.",
                  icon: <ShieldCheck className="w-6 h-6" />,
                },
                {
                  title: "Leadership & Confidence Building",
                  desc: "Workshops and mentoring programmes to build leadership qualities and decision-making confidence.",
                  icon: <Lightbulb className="w-6 h-6" />,
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-[#f5b000]/5 text-[#f5b000] group-hover:bg-[#f5b000] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f5b000] transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Call to Action */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[#17745f] text-center text-white shadow-2xl relative overflow-hidden group">
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5b000]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">Support Women Empowerment</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Your support can provide the tools and training needed for women to build a brighter future for themselves and their community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#f5b000] hover:bg-[#e0a100] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WomenSkill;

