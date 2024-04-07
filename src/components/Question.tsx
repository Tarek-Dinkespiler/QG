type Answer = "A" | "B" | "C" | "D";
const correctAnswer: Answer = "A";

export const Question = ({
  score,
  incrementScore,
}: {
  score: number;
  incrementScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const submitAnswer = (answer: Answer) => {
    if (answer === correctAnswer) {
      incrementScore(score + 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-primary text-dark rounded-l-lg md:flex-row md:max-w-xl">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="images/joconde.jpg"
      />
      <div className="h-full flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-2xl font-bold">
          Lequel de ces peintres a réalisé ce tableau ?
        </h5>
        <div className="font-normal">
          <p
            className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full hover:bg-dark hover:text-primary hover:cursor-pointer"
            onClick={() => submitAnswer("A")}
          >
            <strong className="px-3">A</strong> Léonard de Vinci
          </p>
          <p
            className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full hover:bg-dark hover:text-primary hover:cursor-pointer"
            onClick={() => submitAnswer("B")}
          >
            <strong className="px-3">B</strong> Eugène Delacroix
          </p>
          <p
            className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full hover:bg-dark hover:text-primary hover:cursor-pointer"
            onClick={() => submitAnswer("C")}
          >
            <strong className="px-3">C</strong> Raphaël Sanzio
          </p>
          <p
            className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full hover:bg-dark hover:text-primary hover:cursor-pointer"
            onClick={() => submitAnswer("D")}
          >
            <strong className="px-3">D</strong> Diego Velasquez
          </p>
        </div>
      </div>
    </div>
  );
};
