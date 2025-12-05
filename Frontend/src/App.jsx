import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import { useState } from "react";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import News from "./Pages/News.jsx";
import ML from "./Pages/ML.jsx"



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
