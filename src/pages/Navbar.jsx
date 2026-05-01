// import { useState, useEffect, useRef } from "react";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const dropdownRef = useRef(null);

//   const navLinks = [
//     {
//       label: "Home",
//       path: "/",
//       dropdown: [
//         { label: "Home 1", path: "/" },
//         { label: "Home 2", path: "/home2" },
//         { label: "Home 3", path: "/home3" },
//       ],
//     },
//     { label: "About", path: "/about" },
//     {
//       label: "Donations",
//       path: "/donations",
//       dropdown: [
//         { label: "All Donations", path: "/donations" },
//         { label: "Single Donation", path: "/donations/single" },
//         { label: "Donation Detail", path: "/donations/detail" },
//       ],
//     },
//     {
//       label: "Pages",
//       path: "/pages",
//       dropdown: [
//         { label: "FAQ", path: "/faq" },
//         { label: "Team", path: "/team" },
//         { label: "Testimonials", path: "/testimonials" },
//         { label: "404 Page", path: "/404" },
//       ],
//     },
//     {
//       label: "Blog",
//       path: "/blogs",
//       dropdown: [
//         { label: "Blog Grid", path: "/blogs" },
//         { label: "Blog List", path: "/blogs/list" },
//         { label: "Blog Detail", path: "/blogs/detail" },
//       ],
//     },
//     { label: "Contact", path: "/contact", highlight: true },
//   ];

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll when mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   const navigate = (path) => {
//     console.log("Navigate to:", path);
//     setMobileOpen(false);
//     setOpenDropdown(null);
//   };

//   const toggleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   const socialLinks = [
//     {
//       label: "Facebook",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//           <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//         </svg>
//       ),
//     },
//     {
//       label: "Twitter",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//           <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//         </svg>
//       ),
//     },
//     {
//       label: "YouTube",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//           <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
//           <polygon
//             fill="white"
//             points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
//           />
//         </svg>
//       ),
//     },
//     {
//       label: "LinkedIn",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//           <rect x="2" y="9" width="4" height="12" />
//           <circle cx="4" cy="4" r="2" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <header
//       className={`w-full font-sans sticky top-0 z-[999] transition-shadow duration-300 ${
//         scrolled ? "shadow-lg" : ""
//       }`}
//     >
//       {/* TOP BAR */}
//       <div className="bg-[#f3f3f3]">
//         <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
//           {/* Logo */}
//           <button
//             onClick={() => navigate("/")}
//             className="bg-transparent border-none cursor-pointer p-0 flex-shrink-0 flex items-center"
//             aria-label="Go to homepage"
//           >
//             <span className="text-[32px] font-extrabold tracking-tighter leading-none flex items-center relative">
//               <span className="relative inline-block">
//                 <span className="text-[#1d1d1d]">D</span>
//                 <svg
//                   className="absolute -top-[3px] left-1 w-[18px] h-[22px] pointer-events-none"
//                   viewBox="0 0 16 20"
//                   fill="none"
//                 >
//                   <path
//                     d="M3 18L10 2"
//                     stroke="#f5a800"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                   />
//                   <path
//                     d="M2 13h10"
//                     stroke="#1f8d57"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//               <span className="text-[#1d1d1d]">onat</span>
//             </span>
//           </button>

//           {/* Contact Info – hidden on < lg */}
//           <div className="hidden lg:flex items-center flex-1 justify-center">
//             {[
//               { label: "Locate Address:", value: "New York City, USA" },
//               { label: "Call us any time:", value: "+163-3654-7896" },
//               { label: "Email us any time:", value: "info@donat.com" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="px-7 first:pl-0 last:pr-0 border-l border-gray-300 first:border-l-0 flex-shrink-0"
//               >
//                 <p className="text-[13px] text-gray-500 mb-0.5">{item.label}</p>
//                 <p className="text-[17px] font-bold text-[#1d1d1d] whitespace-nowrap">
//                   {item.value}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Social Icons – hidden on < sm */}
//           <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
//             {socialLinks.map((s) => (
//               <a
//                 key={s.label}
//                 href="#"
//                 aria-label={s.label}
//                 className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#1d1d1d] hover:bg-[#17745f] hover:text-white hover:border-[#17745f] transition-all duration-200 flex-shrink-0"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <div className="bg-[#f3f3f3] px-5 pb-3">
//         <nav
//           ref={dropdownRef}
//           className="max-w-6xl mx-auto bg-[#17745f] rounded-full relative"
//         >
//           <div className="flex items-center justify-between px-8 min-h-[62px]">
//             {/* Desktop Nav Links */}
//             <ul className="hidden lg:flex items-center gap-0 list-none m-0 p-0">
//               {navLinks.map((link) => (
//                 <li key={link.label} className="relative group">
//                   <button
//                     onClick={() =>
//                       link.dropdown
//                         ? toggleDropdown(link.label)
//                         : navigate(link.path)
//                     }
//                     className={`flex items-center gap-2 px-3.5 py-[10px] text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
//                       link.highlight
//                         ? "text-[#ffb400]"
//                         : "text-white hover:text-[#ffb400]"
//                     }`}
//                   >
//                     {link.label}
//                     {link.dropdown && (
//                       <svg
//                         className={`w-3.5 h-3.5 transition-transform duration-200 ${
//                           openDropdown === link.label ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2.5}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     )}
//                   </button>

//                   {/* Dropdown menu – appears on hover */}
//                   {link.dropdown && (
//                     <ul className="absolute left-0 top-full w-[210px] bg-white rounded-2xl overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] list-none m-0 p-0">
//                       {link.dropdown.map((item, idx) => (
//                         <li
//                           key={item.label}
//                           className={`${
//                             idx !== link.dropdown.length - 1
//                               ? "border-b border-gray-100"
//                               : ""
//                           }`}
//                         >
//                           <button
//                             onClick={() => navigate(item.path)}
//                             className="block w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#17745f] hover:text-white transition-colors duration-150"
//                           >
//                             {item.label}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* Right Side Actions */}
//             <div className="flex items-center gap-2 ml-auto py-2">
//               {/* Search */}
//               <button
//                 aria-label="Search"
//                 className="w-11 h-11 rounded-full bg-[#f5a800] flex items-center justify-center text-white hover:bg-[#dd9800] transition-colors duration-200 flex-shrink-0"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.2}
//                 >
//                   <circle cx="11" cy="11" r="8" />
//                   <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
//                 </svg>
//               </button>

//               {/* Cart */}
//               <button
//                 aria-label="Cart"
//                 className="relative w-11 h-11 rounded-full bg-[#1f6f5d] border border-white/10 flex items-center justify-center text-white hover:bg-[#145443] transition-colors duration-200 flex-shrink-0"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12M10 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z"
//                   />
//                 </svg>
//                 <span className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-[#f5a800] rounded-full text-[10px] font-bold flex items-center justify-center text-white">
//                   0
//                 </span>
//               </button>

//               {/* Donate Button – visible from sm up */}
//               <button
//                 onClick={() => navigate("/donations")}
//                 className="hidden sm:flex items-center gap-2 bg-[#f5b000] text-white font-bold text-[15px] px-5 h-11 rounded-full hover:bg-[#e0a100] transition-colors duration-200 shadow-md flex-shrink-0 whitespace-nowrap"
//               >
//                 <svg
//                   className="w-4 h-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                 </svg>
//                 Donate Now
//               </button>

//               {/* Hamburger – visible only on < lg */}
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 aria-label="Toggle menu"
//                 aria-expanded={mobileOpen}
//                 className="lg:hidden text-white p-1"
//               >
//                 {mobileOpen ? (
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* MOBILE MENU */}
//           {mobileOpen && (
//             <div className="lg:hidden bg-[#155b4b] border-t border-white/10 rounded-b-2xl overflow-hidden animate-[slideDown_0.25s_ease]">
//               {navLinks.map((link) => (
//                 <div key={link.label}>
//                   <button
//                     onClick={() => {
//                       if (link.dropdown) {
//                         toggleDropdown(link.label);
//                       } else {
//                         navigate(link.path);
//                       }
//                     }}
//                     className={`w-full text-left flex items-center justify-between px-5 py-3.5 text-[15px] font-semibold border-b border-white/10 ${
//                       link.highlight ? "text-[#fcd34d]" : "text-white"
//                     }`}
//                   >
//                     {link.label}
//                     {link.dropdown && (
//                       <svg
//                         className={`w-4 h-4 transition-transform duration-200 ${
//                           openDropdown === link.label ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     )}
//                   </button>

//                   {link.dropdown && openDropdown === link.label && (
//                     <div className="bg-[#104739]">
//                       {link.dropdown.map((item, idx) => (
//                         <button
//                           key={item.label}
//                           onClick={() => navigate(item.path)}
//                           className={`block w-full text-left px-9 py-3 text-sm text-[#d1fae5] hover:text-white transition-colors duration-150 ${
//                             idx !== link.dropdown.length - 1
//                               ? "border-b border-white/5"
//                               : ""
//                           }`}
//                         >
//                           {item.label}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile footer: socials + donate */}
//               <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-3.5">
//                 <div className="flex gap-2">
//                   {socialLinks.map((s) => (
//                     <a
//                       key={s.label}
//                       href="#"
//                       aria-label={s.label}
//                       className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200"
//                     >
//                       {s.icon}
//                     </a>
//                   ))}
//                 </div>
//                 <button
//                   onClick={() => navigate("/donations")}
//                   className="flex items-center gap-2 bg-[#f5b000] text-white font-bold text-sm px-5 h-10 rounded-full whitespace-nowrap"
//                 >
//                   <svg
//                     className="w-3.5 h-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                   </svg>
//                   Donate Now
//                 </button>
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>

//       {/* Keyframes for slideDown animation */}
//       <style>{`
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-8px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/image-rmvbg.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    { label: "About", path: "/about" },
    {
      label: "Donations",
      path: "/donations",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Blog",
      path: "/blogs",
    },
    { label: "Contact", path: "/contact", highlight: true },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const socialLinks = [
    {
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon
            fill="white"
            points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className={`w-full font-sans top-0 z-[999] transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-[#f3f3f3]">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="bg-transparent border-none cursor-pointer p-0 flex-shrink-0 flex items-center"
            aria-label="Go to homepage"
          >
            <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
          </button>

          {/* Contact Info – hidden on < lg */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            {[
              { label: "Locate Address:", value: "New York City, USA" },
              { label: "Call us any time:", value: "+163-3654-7896" },
              { label: "Email us any time:", value: "info@donat.com" },
            ].map((item, i) => (
              <div
                key={i}
                className="px-7 first:pl-0 last:pr-0 border-l border-gray-300 first:border-l-0 flex-shrink-0"
              >
                <p className="text-[13px] text-gray-500 mb-0.5">{item.label}</p>
                <p className="text-[17px] font-bold text-[#1d1d1d] whitespace-nowrap">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Social Icons – hidden on < sm */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#1d1d1d] hover:bg-[#17745f] hover:text-white hover:border-[#17745f] transition-all duration-200 flex-shrink-0"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-[#f3f3f3] px-5 pb-0">
        <nav
          ref={dropdownRef}
          className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto bg-[#17745f] rounded-full relative"
        >
          <div className="flex items-center justify-between px-8 min-h-[62px]">
            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-0 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label} className="relative group">
                  <button
                    onClick={() => {
                      if (link.dropdown) {
                        toggleDropdown(link.label);
                      } else {
                        navigate(link.path);
                        setMobileOpen(false);
                        setOpenDropdown(null);
                      }
                    }}
                    className={`flex items-center gap-2 px-3.5 py-[10px] text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
                      link.highlight
                        ? "text-[#ffb400]"
                        : "text-white hover:text-[#ffb400]"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown menu – appears on hover */}
                  {link.dropdown && (
                    <ul className="absolute left-0 top-full w-[210px] bg-white rounded-2xl overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] list-none m-0 p-0">
                      {link.dropdown.map((item, idx) => (
                        <li
                          key={item.label}
                          className={`${
                            idx !== link.dropdown.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <button
                            onClick={() => {
                              navigate(item.path);
                              setMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#17745f] hover:text-white transition-colors duration-150"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 ml-auto py-2">
              {/* Donate Button – visible from sm up */}
              <button
                onClick={() => navigate("/donations")}
                className="hidden sm:flex items-center gap-2 bg-[#f5b000] text-white font-bold text-[15px] px-5 h-11 rounded-full hover:bg-[#e0a100] transition-colors duration-200 shadow-md flex-shrink-0 whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Donate Now
              </button>

              {/* Hamburger – visible only on < lg */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                className="lg:hidden text-white p-1"
              >
                {mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="lg:hidden bg-[#155b4b] border-t border-white/10 rounded-b-2xl overflow-hidden animate-[slideDown_0.25s_ease]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      if (link.dropdown) {
                        toggleDropdown(link.label);
                      } else {
                        navigate(link.path);
                        setMobileOpen(false);
                        setOpenDropdown(null);
                      }
                    }}
                    className={`w-full text-left flex items-center justify-between px-5 py-3.5 text-[15px] font-semibold border-b border-white/10 ${
                      link.highlight ? "text-[#fcd34d]" : "text-white"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {link.dropdown && openDropdown === link.label && (
                    <div className="bg-[#104739]">
                      {link.dropdown.map((item, idx) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            navigate(item.path);
                            setMobileOpen(false);
                            setOpenDropdown(null);
                          }}
                          className={`block w-full text-left px-9 py-3 text-sm text-[#d1fae5] hover:text-white transition-colors duration-150 ${
                            idx !== link.dropdown.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile footer: socials + donate */}
              <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-3.5">
                <div className="flex gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => {
                    navigate("/donations");
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-2 bg-[#f5b000] text-white font-bold text-sm px-5 h-10 rounded-full whitespace-nowrap"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Donate Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Keyframes for slideDown animation */}
      <style>{`
        @keyframes slideDown {eab
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
