import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { Quiz } from "./components/Quiz";

const App = () => (
  <div className="h-screen w-screen bg-dark flex flex-col">
    <Navbar />
    <div className="flex flex-row justify-center">
      <Quiz />
    </div>
  </div>
);

const root: HTMLElement = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
