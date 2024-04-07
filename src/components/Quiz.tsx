import { useState } from "react";
import { Question } from "./Question";
import { Score } from "./Score";

export const Quiz = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Question score={counter} incrementScore={setCounter} />
      <Score score={counter} />
    </>
  );
};
