import { createBrowserRouter } from "react-router-dom";
import NewsDetail from "@/pages/NewsDetail";
import HomePage from "@/pages/Home";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "news/:id",
        element: <NewsDetail />,
      },
    ],
  },
]);

export default router;
