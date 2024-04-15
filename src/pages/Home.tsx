import { Outlet } from "react-router-dom";

export const Home = () => (
  <div className="bg-teal-100">
    <div
      className="h-screen w-screen bg-repeat flex flex-col"
      style={{ backgroundImage: "url(images/background_pattern.svg)" }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="flex p-4  bg-white border border-gray-200 rounded-lg shadow">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);
