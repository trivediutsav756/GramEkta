import React from "react";
import HeroSection from "../components/home/HeroSection";
import CharityServices from "../components/home/Charity_Services";
import AboutSection from "../components/home/AboutSection";
import VolunteerSection from "../components/home/Volunteersection ";
import DonationCauses from "../components/home/Donationcauses";
import SuccessStory from "../components/home/Successstory";
import OurVolunteers from "../components/home/Ourvolunteers";
import Programs from "../components/home/Programs";
import FAQSection from "../components/home/Faq";
import NewsSection from "../components/home/News_Articles";
import SectiionNew from "../components/home/Sectionnew";
import TrustedBy from "../components/home/Trustedby";
import HeroStats from "../components/home/HelpSection";
import Testimonials from "../components/home/Testimonials";
import RecentProjects from "../components/home/Projects";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CharityServices />
      <AboutSection />
      <VolunteerSection />
      <DonationCauses />
      <Programs />
      <SuccessStory />
      <OurVolunteers />
      {/* <TrustedBy /> */}
      {/* <SectiionNew /> */}
      <HeroStats/>
      <Testimonials/>
      <RecentProjects/>
      <FAQSection />
      <NewsSection />
    </div>
  );
};

export default Home;
