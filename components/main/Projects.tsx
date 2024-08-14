import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/banking.png"
          title="Expensely - Banking Web App"
          description="Expensely is a personal finance management app where users can connect bank accounts, view transactions, and transfer money."
        />
        <ProjectCard
          src="/chatu.png"
          title="ChatU - Messaging Platform"
          description="ChatU is a user-friendly messaging platform that enhances communication with its intuitive design and robust features."
        />
        <ProjectCard
          src="/trackeats.png"
          title="TrackMyEats - Calorie Tracker App"
          description="TrackMyEats is a mobile app that allows users to track their calorie intake by searching for products using names or barcodes."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-20">
      <ProjectCard
          src="/stock.png"
          title="PredictMe - ML Stock Predictor"
          description="PredictMe is a stock predictor program built using tensorflow relying on the LSTM model with sentiment analysis."
        />
        <ProjectCard
          src="/whac.png"
          title="Whac-a-Mole - Browser Game"
          description="Whac-a-Mole is a browser game where the player tries to hit mole while dodging plant eaters to earn points."
        />
        <ProjectCard
          src="/portf.png"
          title="Personal Portfolio"
          description="Explore my personal portfolio website, showcasing a curated collection of my computer science projects."
        />
      </div>
    </div>
  );
};

export default Projects;
