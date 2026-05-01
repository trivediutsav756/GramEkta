import React, { useEffect } from "react";
import logo from "../assets/logo.jpeg";
import ruralUrbanBg from "../assets/rural_urban.png";
import { Road, Building2, School, Construction, UtilityPole, Users, Map, ShieldCheck, CheckCircle2 } from "lucide-react";

const RuralUrban = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden text-gray-800 pt-1 md:pt-4">
      {/* Theme-Consistent Hero Banner */}
      <section className="relative bg-[#17745f] py-16 md:py-24">
        {/* Subtle Relatable Image Overlay */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src={ruralUrbanBg} 
            alt="Rural & Urban Development"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 font-serif">
              Rural & Urban <br />
              <span className="text-[#fcd34d]">Development</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed italic border-l-4 border-[#f5b000] pl-6 mx-auto lg:mx-0">
              "Gram Ekta Foundation undertakes comprehensive infrastructure development to improve quality of life in both rural and urban communities, operating entirely without profit motive."
            </p>
          </div>

          {/* Right: Branding */}
          <div className="flex-shrink-0 animate-fade-in w-full lg:w-auto flex justify-center">
             {/* Logo placeholder consistent with template */}
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
          
          {/* Section 1: INFRASTRUCTURE & CONNECTIVITY */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#17745f]/5 px-6 py-3 rounded-full border border-[#17745f]/10">
              <Map className="text-[#17745f] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#17745f] tracking-tight uppercase">Infrastructure & Connectivity</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Road & Footpath Construction",
                  desc: "Building and repairing roads, footpaths and culverts to connect communities and improve mobility.",
                  icon: <Map className="w-6 h-6" />,
                },
                {
                  title: "Drainage Systems",
                  desc: "Installing and maintaining drainage infrastructure to prevent waterlogging and flooding.",
                  icon: <Construction className="w-6 h-6" />,
                },
                {
                  title: "Civil Infrastructure",
                  desc: "Comprehensive civil infrastructure works for the overall benefit and welfare of the community.",
                  icon: <ShieldCheck className="w-6 h-6" />,
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

          {/* Section 2: COMMUNITY & PUBLIC UTILITIES */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#f5b000]/5 px-6 py-3 rounded-full border border-[#f5b000]/10">
              <Users className="text-[#f5b000] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#f5b000] tracking-tight uppercase">Community & Public Utilities</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Community Halls",
                  desc: "Constructing multipurpose community halls for local gatherings, events and social activities.",
                  icon: <Building2 className="w-6 h-6" />,
                },
                {
                  title: "School Buildings",
                  desc: "Building educational infrastructure including classrooms, libraries and essential school facilities.",
                  icon: <School className="w-6 h-6" />,
                },
                {
                  title: "Public Utilities",
                  desc: "Repair and maintenance of essential public utility structures and civic amenities.",
                  icon: <CheckCircle2 className="w-6 h-6" />,
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

        {/* Footer Call to Action (Theme-Consistent) */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[#17745f] text-center text-white shadow-2xl relative overflow-hidden group">
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5b000]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">Support our Development Initiatives</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Every contribution helps us build stronger, more connected communities through essential infrastructure development.
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

export default RuralUrban;
