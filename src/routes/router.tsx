import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { AppointmentLayout, MainLayout, Root } from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <p>Home</p>,
      },
      {
        path: "about",
        element: <p>about</p>,
      },
      {
        path: "contact",
        element: <p>contact</p>,
      },
      {
        path: "appointment",
        element: <AppointmentLayout />,
        children: [
          {
            path: "patient",
            element: <p>patient</p>,
          },
          {
            path: "medical-agenda",
            element: <p>medical agenda</p>,
          },
        ],
      },
    ],
  },
]);
