import React from "react";
import IntroGreetings from "@/components/IntroGreetings";
import Faqs from "@/components/Faqs";
import qas from "@/constants/questions";

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center px-2 space-y-10">
      <IntroGreetings first="Hello" middle="Muhammad Ahmad" last="here." />
      <Faqs qas={qas} />
    </div>
  );
};

export default Home;
