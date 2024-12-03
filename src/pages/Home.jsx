import React from "react";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";

const Home = () => {
  return (
    <>
      <div className="pb-20 bg-teal-400">
        <HeroSection />
      </div>
      <SkillSection />
    </>
  );
};

export default Home;
