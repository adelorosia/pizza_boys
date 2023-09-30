import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import About from "../About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>notFound</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
