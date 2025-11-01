import { NavLink } from "react-router-dom";
import Banner from "./pages/Home/Banner.jsx";

const Nav = () => {
  return (
    <>
      <Banner />

      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        <span className="text-orange-400 font-bold text-4xl ">STOCKLY</span>

        <div>
          <ul className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <li className="text-white text-xl font-bold hover:text-indigo-600 transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline transition" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold hover:text-indigo-600 transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline transition" : ""
                }
                to="dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold hover:text-indigo-600 transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline transition" : ""
                }
                to="news"
              >
                News
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold hover:text-indigo-600 transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline transition" : ""
                }
                to="register"
              >
                Register
              </NavLink>
            </li>
            <li className="text-white text-xl font-bold hover:text-indigo-600 transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 underline transition" : ""
                }
                to="predict"
              >
                Prediction
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <NavLink
            to="login"
            className="hidden md:block px-6 py-2 border bg-green-400 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
          >
            Login
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Nav;
