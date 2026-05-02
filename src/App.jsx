// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // Components

// // Pages
// import Navbar from "./pages/Navbar";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Donations from "./pages/Donations";
// import About from "./pages/About";
// import Pages from "./pages/Pages";
// import Footer from "./pages/Footer";

// // Scroll to top
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);

//   return null;
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />

//       <div className="min-h-screen flex flex-col">
//         <Navbar />

//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/donations" element={<Donations />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/pages" element={<Pages />} />

//             {/* Optional routes */}
//             {/* <Route path="/about" element={<div>About Page</div>} /> */}
         
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import ScrollTopButton from "./pages/ScrollTopButton";

// Pages
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import About from "./pages/About";
import Pages from "./pages/Pages";
import Footer from "./pages/Footer";
import CleanWater from "./pages/CleanWater";
import RuralUrban from "./pages/RuralUrban";
import EducationSkill from "./pages/EducationSkill";
import FarmerEmpowerment from "./pages/FarmerEmpowerment";
import WomenSkill from "./pages/WomenSkill";
import Environment from "./pages/Environment";
import BlogDetail from "./pages/BlogDetail";
import BecomeVolunteer from "./pages/BecomeVolunteer";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-[90px] md:pt-[130px] lg:pt-[170px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Pages />} />
            <Route path="/become-volunteer" element={<BecomeVolunteer />} />
            <Route path="/services/clean-water" element={<CleanWater />} />
            <Route path="/services/rural-urban" element={<RuralUrban />} />
            <Route path="/services/education-skill" element={<EducationSkill />} />
            <Route path="/services/farmer-empowerment" element={<FarmerEmpowerment />} />
            <Route path="/services/women-skill" element={<WomenSkill />} />
            <Route path="/services/environment" element={<Environment />} />
          </Routes>
        </main>

        <Footer />

        {/* 👇 Floating Scroll Button */}
        <ScrollTopButton />
      </div>
    </BrowserRouter>
  );
};

export default App;