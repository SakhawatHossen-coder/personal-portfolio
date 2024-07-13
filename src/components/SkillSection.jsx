import React from "react";
import { Typography } from "@material-tailwind/react";
import SkillCard from "./SkillCard";

const SkillSection = () => {
  return (
    <div className="bg-teal-500 text-center py-10">
      <Typography variant="h1" color="black" className="underline">
        Skill Section
      </Typography>

      <div>
        <SkillCard />
      </div>
    </div>
  );
};

export default SkillSection;
