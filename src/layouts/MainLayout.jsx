import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h1>🌐 Main Site</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default MainLayout;
