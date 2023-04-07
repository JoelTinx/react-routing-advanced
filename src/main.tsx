import ReactDOM from "react-dom/client";
import { HashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <HashRouter>
  <RouterProvider router={router} />
  // </HashRouter>
);
