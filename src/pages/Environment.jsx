import React, { useEffect } from "react";
import logo from "../assets/image-rmvbg.png";
import { TreePine, Leaf, Recycle, Waves, Wind, GraduationCap } from "lucide-react";

const Environment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden text-gray-800 pt-1 md:pt-4">
      {/* Theme-Consistent Hero Banner */}
      <section className="relative bg-[#17745f] py-16 md:py-24">
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
              Environmental <br />
              <span className="text-[#fcd34d]">Development</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed italic border-l-4 border-[#f5b000] pl-6 mx-auto lg:mx-0">
              "Nurturing nature and protecting the environment — promoting afforestation, biodiversity, pollution control and eco-conscious community practices for a sustainable future."
            </p>
          </div>

          {/* Right: Branding */}
          <div className="flex-shrink-0 animate-fade-in w-full lg:w-auto flex justify-center">
             <img src={logo} alt="Gram Ekta Foundation" className="h-32 md:h-48 object-contain brightness-0 invert opacity-20" />
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
          
          {/* Section 1: CONSERVATION & RESTORATION */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#17745f]/5 px-6 py-3 rounded-full border border-[#17745f]/10">
              <TreePine className="text-[#17745f] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#17745f] tracking-tight uppercase">Conservation & Restoration</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Afforestation & Tree Plantation",
                  desc: "Organising large-scale tree plantation drives in barren lands, roadsides, schools and community spaces to increase green cover.",
                  icon: <TreePine className="w-6 h-6" />,
                },
                {
                  title: "Biodiversity Conservation",
                  desc: "Protecting local flora and fauna through awareness, habitat preservation and promotion of native plant species in communities.",
                  icon: <Leaf className="w-6 h-6" />,
                },
                {
                  title: "Watershed & Water Body Restoration",
                  desc: "Rejuvenating ponds, lakes, rivers and watersheds through desilting, bund repair and community water conservation programs.",
                  icon: <Waves className="w-6 h-6" />,
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

          {/* Section 2: SUSTAINABLE ACTIONS */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#f5b000]/5 px-6 py-3 rounded-full border border-[#f5b000]/10">
              <Recycle className="text-[#f5b000] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#f5b000] tracking-tight uppercase">Sustainable Actions</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Waste Reduction & Recycling",
                  desc: "Promoting zero-waste practices, composting, material recycling and reducing single-use plastic at the community level.",
                  icon: <Recycle className="w-6 h-6" />,
                },
                {
                  title: "Pollution Control Initiatives",
                  desc: "Campaigns and practical programs to reduce air, water and soil pollution, including awareness drives and eco-friendly alternatives.",
                  icon: <Wind className="w-6 h-6" />,
                },
                {
                  title: "Eco-Awareness & Green Education",
                  desc: "Running environmental literacy programmes in schools and communities to cultivate a culture of ecological responsibility.",
                  icon: <GraduationCap className="w-6 h-6" />,
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5b000]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">Join Our Green Mission</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Your support helps us plant more trees, restore more water bodies, and educate the next generation of environmental stewards.
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

export default Environment;
