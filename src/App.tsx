import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const App = () => (
  <>
    <h1 className="text-3xl">QG</h1>
    <p>Petite application de jeux pour Raphaël</p>
  </>
);

const root: HTMLElement = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
