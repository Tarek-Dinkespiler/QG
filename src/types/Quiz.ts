export type Question = {
  phrase: string;
  imageName: string;
  options: string[];
  solution: string;
};

export type Quiz = {
  id: string;
  name: string;
  nbOfQuestions: number;
  questions: Question[];
};
