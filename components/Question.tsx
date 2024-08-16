"use client";

import React, { useState } from "react";
import { QuestionType } from "@/constants/types";

const Question = ({ question, answer }: QuestionType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2
        className="hover:cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {question}
      </h2>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default Question;
