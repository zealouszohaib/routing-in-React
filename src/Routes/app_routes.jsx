import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Loading from "../pages/Loading";

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Messages = lazy(() => import("../pages/Messages"));
const Tasks = lazy(() => import("../pages/Tasks"));
const TaskDetail = lazy(() => import("../pages/TaskDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));

function AppRoutes() {

const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> }, // default route "/"
        { path: "about", element: <About /> },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> }, // "/dashboard"
        { path: "messages", element: <Messages /> },
        { path: "tasks", element: <Tasks /> },
        { path: "tasks/:taskId", element: <TaskDetail /> }, // dynamic route
      ],
    },
    { path: "*", element: <NotFound /> },
  ]

  let element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

export default AppRoutes;
