import { useState } from "react";
import { Question } from "../components/Question";
import { Score } from "../components/Score";

import type { Answers } from "../types/Answers";
import { useParams } from "react-router-dom";
import { Quiz as QuizType } from "../types/Quiz";

const quizList: QuizType[] = [
  {
    id: "000000",
    name: "Icônes historiques de la peinture 1/3",
    nbOfQuestions: 5,
    questions: [
      {
        phrase: "Lequel de ces peintres a réalisé ce tableau ?",
        object: { kind: "image", path: "joconde.jpg" },
        options: [
          "Léonard de Vinci",
          "Eugène Delacroix",
          "Raphaël Sanzio",
          "Diego Velasquez",
        ],
        solution: "Léonard de Vinci",
      },
    ],
  },
];

export const Quiz = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState<Answers>([]);
  const quiz = quizList.find((quiz) => quiz.id === id);
  return quiz ? (
    <div className="flex flex-row">
      <Question
        answers={answers}
        addAnswer={setAnswers}
        question={quiz.questions[0]}
      />
      <Score answers={answers} />
    </div>
  ) : (
    <h1 className="text-6xl"> Quiz introuvable</h1>
  );
};
