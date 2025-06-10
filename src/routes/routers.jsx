import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import EventsPage from "../pages/EventsPage";
import HistoryPage from "../pages/HistoryPage";
import QuizPage from "../pages/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/quiz-history",
        element: <QuizPage />,
      },
    ],
  },
]);

export default router;
