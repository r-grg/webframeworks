import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Oefening1 from "./pages/Oefening1";
import Oefening2 from "./pages/Oefening2";
import Oefening3 from "./pages/Oefening3";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // bevat NavBar + <Outlet/>
    children: [
      { index: true, element: <Oefening1 /> }, // standaard naar oefening1
      { path: "oefening1", element: <Oefening1 /> },
      { path: "oefening2", element: <Oefening2 /> },
      { path: "oefening3", element: <Oefening3 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
