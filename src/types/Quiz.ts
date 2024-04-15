interface Image {
  kind: "image";
  path: string;
}

interface Text {
  kind: "text";
  text: string;
}

export type QuestionObject = Image | Text;

export type Question = {
  phrase: string;
  object: QuestionObject;
  options: string[];
  solution: string;
};

export type Quiz = {
  id: string;
  name: string;
  nbOfQuestions: number;
  questions: Question[];
};
