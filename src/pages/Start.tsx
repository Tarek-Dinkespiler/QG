import { Link } from "react-router-dom";

export const Start = () => (
  <form className="space-y-6" action="#">
    <Link to="/list">
      <button
        type="submit"
        className="w-full text-white bg-orange-500 hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <h1 className="text-9xl font-medium">PLAY</h1>
      </button>
    </Link>
    <div>
      <label
        htmlFor="pseudo"
        className="block mb-2 text-sm font-medium text-dark"
      >
        Pseudo
      </label>
      <input
        type="pseudo"
        name="pseudo"
        id="pseudo"
        className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-teal-400 focus:ring-0"
        placeholder="Rapha"
        required
      />
    </div>
  </form>
);
