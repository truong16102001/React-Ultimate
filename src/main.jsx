import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import UserPage from "./pages/Users.jsx";
import TodoApp from "./components/todo/TodoApp.jsx";
import "./styles/global.css";
import ErrorPage from "./pages/Error.jsx";
import BookPage from "./pages/Books.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodoApp /> }, // default render in homepage
      { path: "/manage/users", element: <UserPage /> },
      { path: "/manage/books", element: <BookPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
