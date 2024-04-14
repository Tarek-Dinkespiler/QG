import { Link } from "react-router-dom";

const quizList = [
  {
    id: "000000",
    name: "Les grands chef d'oeuvre de la peinture",
    nbOfQuestions: 5,
  },
  { id: "123456", name: "Quiz 1", nbOfQuestions: 10 },
  { id: "654321", name: "Quiz 2", nbOfQuestions: 12 },
];

export const List = () => (
  <div className="relative overflow-x-auto shadow rounded-lg">
    <div className="table w-full">
      <div className="table-header-group text-white uppercase bg-orange-500">
        <div className="table-row">
          <div className="table-cell px-6 py-3">Nom</div>
          <div className="table-cell px-6 py-3">Nombre de questions</div>
        </div>
      </div>
      <div className="table-row-group">
        {quizList.map(({ id, name, nbOfQuestions }) => (
          <Link
            to={`/quiz/${id}`}
            className="table-row bg-white border-b hover:bg-orange-200"
          >
            <div className="table-cell px-6 py-4 text-left">{name}</div>
            <div className="table-cell px-6 py-4 text-right">
              {nbOfQuestions}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
