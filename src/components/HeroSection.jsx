import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FaDownload } from "react-icons/fa";
import pdf from "../assets/Sakhawat Hossen Web Developer Resume.pdf";
const HeroSection = () => {
  const PDF = pdf;

  return (
    <div>
      <div className="hero pt-10 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Hello there, I'm Sakhawat Hossen
            </h1>
            <Typography variant="h3" color="" className="my-5">
              | Crafting Visually Stunning & Interactive Web Experiences
            </Typography>
            <p className="py-6">
              I'm a passionate Front-End Developer with expertise in crafting
              user interfaces (UI) and features that not only look amazing but
              also deliver engaging user experiences. I bring websites to life
              with clean, modern code and a keen eye for detail.
            </p>
            <Button
              className="flex gap-4 mx-auto justify-center items-center text"
              variant="filled"
              color="blue-gray"
            >
              <a href={PDF} download="Sakhawat Hossen Resume">
                Download
              </a>
              <FaDownload />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
