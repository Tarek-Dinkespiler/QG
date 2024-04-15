import { useState } from "react";
import { Answer, Answers } from "../types/Answers";
import { Question as QuestionType } from "../types/Quiz";
import { randomizeArray } from "../utils/randomizeArray";
import { QuestionObject } from "./QuestionObject";

export const Question = ({
  answers,
  addAnswer,
  question,
}: {
  answers: Answers;
  addAnswer: React.Dispatch<React.SetStateAction<Answers>>;
  question: QuestionType;
}) => {
  const [prepared, setPrepared] = useState<boolean>(false);
  const [options, setOptions] = useState<{ answer: Answer; text: string }[]>(
    [],
  );

  if (!prepared) {
    randomizeArray(question.options);

    setOptions([
      { answer: "A", text: question.options[0] },
      { answer: "B", text: question.options[1] },
      { answer: "C", text: question.options[2] },
      { answer: "D", text: question.options[3] },
    ]);

    setPrepared(true);
  }

  const [submitted, setSubmitted] = useState<Answer | undefined>(undefined);
  const isValid = (answer: Answer) => {
    const answerText = options.find((a) => a.answer === answer)!.text;
    return answerText === question.solution;
  };

  const submitAnswer = (answer: Answer) => {
    if (submitted != undefined) return;
    setSubmitted(answer);

    answers = answers.slice();
    answers.push(isValid(answer));
    addAnswer(answers);
  };

  const Option = ({ answer, text }: { answer: Answer; text: string }) => (
    <p
      className="my-2 py-1 border border-l-8 border-r-8 border-dark rounded-full hover:bg-dark hover:text-white hover:cursor-pointer"
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
    <div className="flex flex-col items-center bg-white text-dark rounded-l-lg border-r-2 border-solid border-dark md:flex-row md:max-w-xl">
      <QuestionObject object={question.object} />
      <div className="h-full flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-2xl font-bold">{question.phrase}</h5>
        <div className="font-normal">{submitted ? Results() : Options()}</div>
      </div>
    </div>
  );
};
