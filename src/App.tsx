import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { ErrorPage } from "./pages/ErrorPage";
import { Quiz } from "./pages/Quiz";
import { Start } from "./pages/Start";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Start /> },
      { path: "list", element: <List /> },
      { path: "quiz/:id", element: <Quiz /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

const root: HTMLElement = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
