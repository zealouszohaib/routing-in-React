import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>📊 Dashboard Area</h1>
      <nav>
        <Link to="/dashboard">Overview</Link> |{" "}
        <Link to="/dashboard/messages">Messages</Link> |{" "}
        <Link to="/dashboard/tasks">Tasks</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
