import React from "react";
import IntroGreetings from "@/components/IntroGreetings";
import PathFinder from "@/components/PathFinder/PathFinder";

const PathFinderPage = () => {
  return (
    <div className="flex flex-col w-full items-center px-2 space-y-10">
      <IntroGreetings first="Simple" middle="Path Finder" last="visualizer." />
      <PathFinder />
    </div>
  );
};

export default PathFinderPage;
