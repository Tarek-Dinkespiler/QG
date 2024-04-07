import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <>
    <h1>QG</h1>
    <p>Petit application de jeux pour Raphaël</p>
  </>
);

const root: HTMLElement = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
