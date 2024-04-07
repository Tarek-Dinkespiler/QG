export const Score = ({ score }: { score: number | undefined }) => {
  return (
    <div className="flex flex-col items-center bg-highlight text-dark rounded-r-lg shadow md:flex-row md:max-w-xl">
      <div className="h-full flex flex-col justify-between p-4 leading-normal">
        <h1 className="flex text-6xl font-bold">Score</h1>
        <h1 className="flex justify-end text-6xl font-bold">{score || 0}</h1>
      </div>
    </div>
  );
};
