import { useState } from "react";
import { Question } from "./Question";
import { Score } from "./Score";

import type { Answers } from "../types/Answers";

export const Quiz = () => {
  const [answers, setAnswers] = useState<Answers>([]);

  return (
    <>
      <Question answers={answers} addAnswer={setAnswers} />
      <Score answers={answers} />
    </>
  );
};
