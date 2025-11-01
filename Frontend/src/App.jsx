import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Freeze from "./Freeze.jsx";
import { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import News from "./News.jsx";
import ML from "./pages/ML.jsx";





const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        
          <Layout />
        
      ),

      children: [
        {
          path: "/",
          element:<Home />       
        },
        {
          path:'dashboard',
          element: <Dashboard />

        },
        {
          path: "news",
          element: <News setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "predict",
          element: <ML />,
        },
        
        
        

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
