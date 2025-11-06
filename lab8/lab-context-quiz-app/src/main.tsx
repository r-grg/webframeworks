import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import { ThemeProvider } from "./context/ThemeContext"; // ✅

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,               // App renders <Outlet/>
    children: [
      { index: true, element: <Home /> },
      { path: "quiz/:difficulty", element: <QuizPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ⬇️ Wrap the entire router in the ThemeProvider */}
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
