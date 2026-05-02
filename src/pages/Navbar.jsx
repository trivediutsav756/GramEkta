import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, Heart, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/image-rmvbg.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Donations", path: "/donations" },
    { label: "FAQ", path: "/faq" },
    { label: "Volunteer", path: "/become-volunteer" },
    { label: "Blog", path: "/blogs" },
    { label: "Contact", path: "/contact", highlight: true },
  ];

  const socialLinks = [
    { label: "Facebook", icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ), path: "#" },
    { label: "Twitter", icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ), path: "#" },
    { label: "YouTube", icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
        </svg>
      ), path: "#" },
    { label: "LinkedIn", icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), path: "#" },
  ];

  const contactInfo = [
    { label: "Call us any time:", value: "+91 9172605333", icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#17745f]">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ) },
    { label: "Email us any time:", value: "gramektafoundation@gmail.com", icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#17745f]">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ) },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [window.location.pathname]);

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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`w-full fixed top-0 z-[999] transition-all duration-500 ${
        scrolled ? "translate-y-0" : ""
      }`}
    >
      {/* TOP BAR - Hidden on mobile, visible on desktop */}
      <div className={`hidden lg:block bg-[#f3f3f3] transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto py-3 opacity-100"}`}>
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>

          {/* Contact Info */}
          <div className="flex items-center flex-1 justify-center gap-12">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-0 uppercase tracking-widest font-bold">{item.label}</p>
                  <p className="text-[14px] font-bold text-[#1d1d1d]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.path}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#1d1d1d] hover:bg-[#17745f] hover:text-white transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={`w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "lg:bg-[#f3f3f3] py-2 lg:py-0 lg:pb-4"}`}>
        <nav
          ref={dropdownRef}
          className={`mx-auto transition-all duration-300 ${
            scrolled 
            ? "max-w-7xl 2xl:max-w-[1400px] bg-transparent lg:px-6" 
            : "max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] bg-[#17745f] rounded-full px-4 lg:px-8"
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "min-h-[50px]" : "min-h-[62px]"}`}>
            
            {/* Mobile/Scrolled Logo */}
            <Link to="/" className={`flex-shrink-0 items-center transition-all duration-300 ${scrolled || mobileOpen ? "flex" : "hidden lg:hidden"}`}>
              <img src={logo} alt="Logo" className={`${scrolled ? "h-12" : "h-16"} w-auto object-contain`} />
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-2 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-3 text-[15px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                      scrolled 
                      ? "text-gray-800 hover:text-[#17745f]" 
                      : link.highlight 
                        ? "text-[#ffb400]" 
                        : "text-white hover:text-[#ffb400]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Donate Button */}
              <Link
                to="/donations"
                className={`hidden sm:flex items-center gap-2 font-bold text-[14px] px-6 h-11 rounded-full transition-all duration-300 shadow-md uppercase tracking-wider ${
                  scrolled 
                  ? "bg-[#17745f] text-white hover:bg-[#115a49]" 
                  : "bg-[#f5b000] text-white hover:bg-[#e0a100]"
                }`}
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                  scrolled || mobileOpen ? "text-[#17745f] bg-gray-100" : "text-white bg-white/10"
                }`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-[1000] shadow-2xl transition-transform duration-500 ease-in-out transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-500 hover:text-[#17745f]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wide transition-colors ${
                    link.highlight 
                    ? "bg-[#ffb400]/10 text-[#e0a100]" 
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#17745f]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Contact Us</h4>
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-gray-800 leading-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50 mt-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.path}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-[#17745f] hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <Link
              to="/donations"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#f5b000] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#e0a100] transition-colors uppercase tracking-widest text-sm"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
