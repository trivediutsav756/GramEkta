import React, { useEffect } from 'react';
import { Building2, Waves, GraduationCap, Sprout, User, Leaf, Eye, Target, HeartHandshake, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.jpeg';
 
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className="w-full bg-[#f6f1e8] font-inter overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center justify-start overflow-hidden bg-[#176b5c] pt-24 pb-16 px-4 mt-1">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
       
        {/* Decorative Background Wave Overlay */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-[150%] h-full absolute -top-[10%] -right-[10%] text-[#ffffff] fill-current opacity-5 transform rotate-6 scale-110">
             <path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" />
           </svg>
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-[150%] h-full absolute top-[10%] -left-[20%] text-[#eda726] fill-current opacity-[0.03] transform -rotate-6 scale-125">
             <path d="M0,50 Q25,80 50,50 T100,50 L100,100 L0,100 Z" />
           </svg>
        </div>
 
        <div className="relative z-10 max-w-7xl mx-auto w-full pl-2 md:pl-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-[1.15] tracking-wide">
              <span className="text-white block">About</span>
              <span className="text-[#eda726] block mt-1">Our Foundation</span>
            </h1>
           
            <div className="mt-8 border-l-[3px] border-[#eda726] pl-6 py-1">
              <p className="text-base md:text-lg text-white/95 leading-relaxed font-light italic">
                "A non-profit organisation dedicated to rural & urban development, clean water, STP Plant, education, agriculture, renewable energy & public welfare."
              </p>
            </div>
          </div>
        </div>
 
        {/* Bottom curve decoration matching #f6f1e8 background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,187.92,109.43Z" fill="#f6f1e8"></path>
          </svg>
        </div>
      </section>
 
      {/* --- MISSION SECTION --- */}
      <section className="py-20 md:py-32 px-4 relative bg-[#f6f1e8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
 
            <div className="flex-1 relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-[2px] bg-[#eda726]"></span>
                  <h2 className="text-[#eda726] font-semibold tracking-[0.2em] uppercase text-sm">Our Mission</h2>
                </div>
 
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#181818] mb-6 leading-[1.1] tracking-tight">
                  Holistic development of communities across India without profit motive.
                </h3>
 
                <p className="text-[#7b7b7b] text-lg leading-relaxed mb-6">
                  Gram Ekta Foundation is a non-profit organisation committed to the holistic development of communities across India. We work without profit motive, channeling all efforts into meaningful, measurable change.
                </p>
                <p className="text-[#7b7b7b] text-lg leading-relaxed">
                  We bring together government agencies, NGOs, educational institutions, and local communities to deliver sustainable solutions that uplift both rural and urban populations.
                </p>
              </div>
            </div>
 
            <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6 relative z-10 w-full">
              <div className="bg-white rounded-[28px] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group transition hover:-translate-y-2">
                <div className="w-[72px] h-[72px] rounded-full border border-[#efe9df] bg-white text-[#176b5c] shadow-[0_8px_18px_rgba(0,0,0,0.06)] flex items-center justify-center mb-6 group-hover:bg-[#176b5c] group-hover:text-white transition-colors duration-300">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h4 className="text-[22px] font-bold text-[#1c1c1c] mb-2">Collaboration</h4>
                <p className="text-[15px] text-[#7b7b7b] leading-7">Connecting NGOs, Gov, and Communities.</p>
              </div>
              <div className="bg-white rounded-[28px] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex flex-col items-center text-center mt-8 md:mt-12 group transition hover:-translate-y-2">
                <div className="w-[72px] h-[72px] rounded-full border border-[#efe9df] bg-white text-[#eda726] shadow-[0_8px_18px_rgba(0,0,0,0.06)] flex items-center justify-center mb-6 group-hover:bg-[#eda726] group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-[22px] font-bold text-[#1c1c1c] mb-2">Measurable Change</h4>
                <p className="text-[15px] text-[#7b7b7b] leading-7">Delivering sustainable & impactful solutions.</p>
              </div>
            </div>
 
          </div>
        </div>
      </section>
 
      {/* --- FOCUS AREAS SECTION --- */}
      <section className="py-20 md:py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
 
          <div className="mb-12 text-center lg:mb-16">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#efc14b]" />
              <span className="text-sm font-medium italic text-[#eda726] sm:text-base">
                What We Do
              </span>
              <span className="h-px w-10 bg-[#efc14b]" />
            </div>
 
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[#181818] sm:text-4xl lg:text-5xl">
              Our Focus Areas
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 mt-8">
            {[
              { icon: Building2, title: "Rural & Urban Development", desc: "Transforming infrastructure to build thriving, resilient communities." },
              { icon: Waves, title: "Clean Water & Sanitation", desc: "Providing safe drinking water and STP plant solutions." },
              { icon: GraduationCap, title: "Education & Skill Dev.", desc: "Opening doors to the future through quality education." },
              { icon: Sprout, title: "Farmer Empowerment", desc: "Modern agriculture techniques and support for local farmers." },
              { icon: User, title: "Women's Skill Development", desc: "Empowering women with skills for financial independence." },
              { icon: Leaf, title: "Environmental Development", desc: "Promoting renewable energy and ecological sustainability." },
            ].map((item, index) => (
              <div key={index} className="group relative mx-auto flex h-full flex-col items-center rounded-[28px] bg-white px-5 pb-8 pt-16 text-center shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full sm:px-7">
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[6px] border-white bg-[#176b5c] text-white shadow-[0_8px_18px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 group-hover:bg-[#eda726] transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="mb-4 mt-2 text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1c1c1c]">
                  {item.title}
                </h3>
                <p className="mb-7 text-[15px] leading-7 text-[#7b7b7b]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* --- VISION & VALUES SECTION --- */}
      <section className="py-24 md:py-32 px-4 relative bg-[#f6f1e8] overflow-hidden border-t border-[#efe9df]">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[50%] rounded-full bg-white filter blur-[100px] opacity-80"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-[#eda726] filter blur-[150px] opacity-10"></div>
          <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#176b5c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
 
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
 
            {/* Left Side: Vision Quote */}
            <div className="flex-1 relative w-full">
              <div className="absolute -top-20 -left-10 text-[200px] font-serif text-[#176b5c] opacity-[0.05] leading-none select-none pointer-events-none">
                "
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-[#eda726]/30 bg-white shadow-sm">
                  <Eye className="w-5 h-5 text-[#eda726]" />
                  <span className="text-[#176b5c] font-bold tracking-[0.15em] uppercase text-sm">Our Vision</span>
                </div>
 
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#181818] mb-8 leading-[1.15] tracking-tight">
                  A society where every individual has access to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#176b5c] to-[#25a58e]">dignified life</span>.
                </h2>
 
                <p className="text-xl md:text-2xl text-[#5a5a5a] italic font-light leading-relaxed">
                  "Regardless of geography or background, providing access to clean water, quality education, and sustainable livelihoods — built through community unity and collective action."
                </p>
 
                <div className="mt-14 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-white p-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.06)] border border-[#efe9df]">
                    <img src={logo} alt="Gram Ekta Logo" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#181818] font-bold text-lg tracking-wide">Gram Ekta Foundation</h4>
                    <p className="text-[#eda726] font-bold text-sm tracking-widest uppercase mt-1">Together We Grow India</p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Right Side: Core Values */}
            <div className="flex-1 w-full">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#176b5c]/20"></div>
                <h3 className="text-[#176b5c] text-sm font-bold tracking-[0.2em] uppercase">Core Values</h3>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#176b5c]/20"></div>
              </div>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  { title: 'Integrity', desc: 'Honesty and transparency in all actions.', icon: '🛡️' },
                  { title: 'Community First', desc: 'Prioritizing the people we serve.', icon: '🤝' },
                  { title: 'Sustainability', desc: 'Long-lasting solutions for the future.', icon: '🌱' },
                  { title: 'Inclusivity', desc: 'Embracing diversity and equality.', icon: '🌍' },
                  { title: 'Accountability', desc: 'Responsibility for our impact.', icon: '⚖️' }
                ].map((value, idx) => (
                  <div key={idx} className={`group relative p-6 rounded-2xl bg-white border border-[#efe9df] overflow-hidden hover:border-[#eda726]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,107,92,0.1)] ${idx === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto w-full' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#176b5c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#f6f1e8] flex items-center justify-center text-2xl border border-[#efe9df] group-hover:scale-110 group-hover:bg-[#176b5c] group-hover:text-white transition-all duration-500">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1c1c1c] mb-1.5 group-hover:text-[#176b5c] transition-colors">{value.title}</h4>
                        <p className="text-[#7b7b7b] text-sm leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </div>
      </section>
 
    </div>
  );
};
 
export default About;
