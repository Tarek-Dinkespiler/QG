import { useState } from "react";
import { Answer, Answers } from "../types/Answers";

const questionNumber: number = 0;
const question: string = "Lequel de ces peintres a réalisé ce tableau ?";
const correctAnswer: Answer = "A";
const options: { answer: Answer; text: string }[] = [
  { answer: "A", text: "Léonard de Vinci" },
  { answer: "B", text: "Eugène Delacroix" },
  { answer: "C", text: "Raphaël Sanzio" },
  { answer: "D", text: "Diego Velasquez" },
];

export const Question = ({
  answers,
  addAnswer,
}: {
  answers: Answers;
  addAnswer: React.Dispatch<React.SetStateAction<Answers>>;
}) => {
  const [submitted, setSubmitted] = useState<Answer | undefined>(undefined);
  const isValid = (answer: Answer) => answer === correctAnswer;

  const submitAnswer = (answer: Answer) => {
    if (submitted != undefined) return;
    setSubmitted(answer);

    answers = answers.slice();
    answers[questionNumber] = isValid(answer);
    addAnswer(answers);
  };

  const Option = ({ answer, text }: { answer: Answer; text: string }) => (
    <p
      className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full hover:bg-dark hover:text-primary hover:cursor-pointer"
      key={answer}
      onClick={() => submitAnswer(answer)}
    >
      <strong className="px-3">{answer}</strong> {text}
    </p>
  );

  const Success = ({ answer, text }: { answer: Answer; text: string }) => {
    return (
      <p
        className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full bg-success"
        key={answer}
      >
        <strong className="px-3">{answer}</strong> {text}
      </p>
    );
  };

  const Failure = ({ answer, text }: { answer: Answer; text: string }) => {
    return (
      <p
        className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full bg-failure"
        key={answer}
      >
        <strong className="px-3">{answer}</strong> {text}
      </p>
    );
  };

  const Incorrect = ({ answer, text }: { answer: Answer; text: string }) => {
    return (
      <p
        className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full bg-incorrect"
        key={answer}
      >
        <strong className="px-3">{answer}</strong> {text}
      </p>
    );
  };

  const Result = (o: { answer: Answer; text: string }) => {
    const { answer } = o;
    if (isValid(answer)) return Success(o);
    if (!isValid(answer) && answer === submitted) return Failure(o);

    return Incorrect(o);
  };

  const Options = () => options.map((o) => Option(o));
  const Results = () => options.map((o) => Result(o));

  return (
    <div className="flex flex-col items-center bg-primary text-dark rounded-l-lg border-r-2 border-solid border-dark md:flex-row md:max-w-xl">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="images/joconde.jpg"
      />
      <div className="h-full flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-2xl font-bold">{question}</h5>
        <div className="font-normal">{submitted ? Results() : Options()}</div>
      </div>
    </div>
  );
};
