import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import News from "./pages/News.jsx";
import ML from "./pages/ML.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: !isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Layout />
      ),

      children: isLoggedIn
        ? [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "news",
              element: <News />,
            },
            {
              path: "predict",
              element: <ML />,
            },
          ]
        : [],
    },
    {
      path: "/login",
      element: <Login setIsLoggedIn={setIsLoggedIn} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
