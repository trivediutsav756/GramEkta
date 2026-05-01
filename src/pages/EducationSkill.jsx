import React, { useEffect } from "react";
import logo from "../assets/logo.jpeg";
import boyImg from "../assets/boy.png";
import { 
  GraduationCap, 
  CheckCircle2, 
  School, 
  Cpu, 
  Library, 
  Wrench, 
  BookOpen, 
  Laptop, 
  ScrollText, 
  CircleDollarSign, 
  Award, 
  Zap, 
  UserRound, 
  Briefcase, 
  Lightbulb,
  Building2
} from "lucide-react";

const EducationSkill = () => {
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
            src={boyImg} 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 font-serif">
              Education & <br />
              <span className="text-[#fcd34d]">Skill Development</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed italic border-l-4 border-[#f5b000] pl-6 mx-auto lg:mx-0">
              "Empowering the next generation through quality education, modern learning facilities, and comprehensive skill development programmes."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Section 1: INFRASTRUCTURE */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#17745f]/5 px-6 py-3 rounded-full border border-[#17745f]/10 w-full lg:w-auto">
              <School className="text-[#17745f] w-6 h-6" />
              <h2 className="text-xl font-bold text-[#17745f] tracking-tight uppercase">Infrastructure</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "School Construction",
                  desc: "Establishment and construction of modern school buildings with safe environments.",
                  icon: <Building2 className="w-6 h-6" />,
                },
                {
                  title: "Digital Learning Labs",
                  desc: "Setting up training centres and labs equipped with modern digital technology.",
                  icon: <Cpu className="w-6 h-6" />,
                },
                {
                  title: "Modern Libraries",
                  desc: "Building libraries with diverse collections of modern reading and learning materials.",
                  icon: <Library className="w-6 h-6" />,
                },
                {
                  title: "Facility Maintenance",
                  desc: "Regular upkeep and maintenance of educational buildings to ensure longevity.",
                  icon: <Wrench className="w-6 h-6" />,
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#17745f]/5 text-[#17745f] group-hover:bg-[#17745f] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#17745f] transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: RESOURCES & ACCESS */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-[#f5b000]/5 px-6 py-3 rounded-full border border-[#f5b000]/10 w-full lg:w-auto">
              <BookOpen className="text-[#f5b000] w-6 h-6" />
              <h2 className="text-xl font-bold text-[#f5b000] tracking-tight uppercase">Resources & Access</h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Digital Devices",
                  desc: "Providing computers and modern digital devices to bridge the technology gap.",
                  icon: <Laptop className="w-6 h-6" />,
                },
                {
                  title: "Learning Materials",
                  desc: "Ensuring supply of high-quality textbooks and supplementary learning resources.",
                  icon: <ScrollText className="w-6 h-6" />,
                },
                {
                  title: "Student Scholarships",
                  desc: "Offering merit-based scholarships to deserving students to support their journey.",
                  icon: <GraduationCap className="w-6 h-6" />,
                },
                {
                  title: "Higher Ed Support",
                  desc: "Financial assistance for students pursuing higher professional education.",
                  icon: <CircleDollarSign className="w-6 h-6" />,
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#f5b000]/5 text-[#f5b000] group-hover:bg-[#f5b000] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#f5b000] transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: CAPACITY BUILDING */}
          <div className="space-y-8 md:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center gap-4 bg-[#17745f]/5 px-6 py-3 rounded-full border border-[#17745f]/10 w-full lg:w-auto">
              <Award className="text-[#17745f] w-6 h-6" />
              <h2 className="text-xl font-bold text-[#17745f] tracking-tight uppercase">Capacity Building</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  title: "Youth Skill Programs",
                  desc: "Practical skill development programs designed to empower rural youth.",
                  icon: <Zap className="w-6 h-6" />,
                },
                {
                  title: "Teacher Training",
                  desc: "Workshops and training for educators to enhance teaching methodologies.",
                  icon: <UserRound className="w-6 h-6" />,
                },
                {
                  title: "Vocational Courses",
                  desc: "Livelihood-focused vocational training and specialized skill courses.",
                  icon: <Briefcase className="w-6 h-6" />,
                },
                {
                  title: "Career Guidance",
                  desc: "Mentorship and guidance programs to help students choose the right path.",
                  icon: <Lightbulb className="w-6 h-6" />,
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#17745f]/5 text-[#17745f] group-hover:bg-[#17745f] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#17745f] transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">Empower a Student Today</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Your support can provide the tools and education needed for a child to build a brighter future for themselves and their community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#f5b000] hover:bg-[#e0a100] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg">
                Support Education
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

export default EducationSkill;