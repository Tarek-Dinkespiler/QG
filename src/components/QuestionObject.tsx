import { QuestionObject as QuestionObjectType } from "../types/Quiz";

const QuestionText = ({ text }: { text: string }) => (
  <h1 className="text-6xl">{text}</h1>
);

const QuestionImage = ({ path }: { path: string }) => (
  <img
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src={`images/${path}`}
  />
);

export const QuestionObject = ({ object }: { object: QuestionObjectType }) => {
  const { kind } = object;

  switch (kind) {
    case "image":
      return <QuestionImage path={object.path} />;
    case "text":
      return <QuestionText text={object.text} />;
    default:
      console.log(
        `Invalid question object kind. Should be "image" | "text". Got: ${kind}`,
      );
      return null;
  }
};
