# 📘 React Router v6 Sample App

This is a sample React application that demonstrates **React Router v6** with:

* `useRoutes` hook for route configuration
* **Nested routes** with layouts (`MainLayout`, `DashboardLayout`)
* **Dynamic routes** (`/dashboard/tasks/:taskId`)
* **Lazy loading** (`React.lazy` + `Suspense`)
* A simple **404 Not Found** page
* A **loading spinner** while lazy-loaded pages are being fetched

---

## 🚀 Features

* **Main site** (`/`, `/about`)
* **Dashboard area** with nested routes:

  * `/dashboard` → Overview
  * `/dashboard/messages` → Messages
  * `/dashboard/tasks` → Task List
  * `/dashboard/tasks/:taskId` → Task Detail (dynamic route)
* **Layouts** with `<Outlet />` for nested navigation
* **Lazy-loaded components** for performance optimization
* **Fallback loader** shown during page load

---

## 📂 Project Structure

```
src/
│── App.jsx
│── routes.jsx              # Central route config with useRoutes
│
├── layouts/
│   ├── MainLayout.jsx
│   └── DashboardLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Dashboard.jsx
│   ├── Messages.jsx
│   ├── Tasks.jsx
│   ├── TaskDetail.jsx
│   └── NotFound.jsx
│
└── components/
    └── Loading.jsx
```

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-router-sample.git
cd react-router-sample
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev   # if using Vite
# OR
npm start     # if using Create React App
```

---

## 📖 How It Works

* Routes are defined in [`routes.jsx`](./src/routes.jsx) using `useRoutes`.
* Pages are **lazy-loaded** with `React.lazy` and wrapped in `Suspense`:

  ```jsx
  const Home = lazy(() => import("./pages/Home"));
  ...
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
  ```
* `MainLayout` handles navigation for the main site.
* `DashboardLayout` handles navigation inside the dashboard.
* Nested routes render inside `<Outlet />`.

---

## 🔮 Future Improvements

* Add **authentication guard** (`RequireAuth`) to protect dashboard routes.
* Use **data fetching loaders** for async routes.
* Add **unit tests** for routing.

---

## 📷 Demo

* `/` → Home Page
* `/about` → About Page
* `/dashboard` → Dashboard Overview
* `/dashboard/messages` → Messages
* `/dashboard/tasks` → Tasks List
* `/dashboard/tasks/1` → Task Detail (dynamic)
* Any invalid route → 404 Not Found

---

