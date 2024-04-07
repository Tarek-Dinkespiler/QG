import type { Answers } from "../types/Answers";

export const Score = ({ answers }: { answers: Answers }) => {
  const score = answers.filter((a) => a).length;

  return (
    <div className="flex flex-col items-center bg-primary text-dark rounded-r-lg shadow md:flex-row md:max-w-xl">
      <div className="h-full flex flex-col justify-between p-4 leading-normal">
        <h1 className="flex text-6xl font-bold">Score</h1>
        <h1 className="flex justify-end text-6xl font-bold">{score}</h1>
      </div>
    </div>
  );
};
