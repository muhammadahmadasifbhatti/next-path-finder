import React from "react";
import { QuestionType } from "@/constants/types";
import Question from "@/components/Question";

const Faqs = ({ qas }: { qas: QuestionType[] }) => {
  return (
    <div className="flex flex-col w-full justify-start items-start">
      {qas.map((qa, i) => (
        <Question key={i} {...qa} />
      ))}
    </div>
  );
};

export default Faqs;
