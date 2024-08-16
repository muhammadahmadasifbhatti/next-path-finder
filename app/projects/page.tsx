import React from "react";
import IntroGreetings from "@/components/IntroGreetings";

const ProjectPage = () => {
  return (
    <div className="flex flex-col w-full items-center px-2 space-y-10">
      <IntroGreetings first="My" middle="Projects" last="are:" />
      <div></div>
    </div>
  );
};

export default ProjectPage;
