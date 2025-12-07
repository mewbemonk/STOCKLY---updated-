import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import News from "./pages/News.jsx";
import ML from "./pages/ML.jsx"



const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        
          <Layout/>
        
      ),

      children: [
        {
          index:true,
          element:<Home />       
        },
        {
          path:'dashboard',
          element: <Dashboard />

        },
        {
          path: "news",
          element: <News/>,
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
          element: <ML/>,
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
