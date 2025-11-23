import React from "react";

import Question from "@/components/Question";
import { QuestionType } from "@/constants/types";

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
