import { NavLink } from "react-router-dom";
import Framer from "./Framer.jsx";
import Banner from "../Component/Banner.jsx"
const Nav = () => {
  return (
    <>
     <Framer> <Banner /></Framer>



<nav className="z-50 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full gap-4 md:gap-0 py-4 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-slate-900">
  <span className="text-orange-400 font-bold text-3xl sm:text-4xl whitespace-nowrap">STOCKLY</span>

<ul className="flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-8 w-full max-w-full overflow-hidden text-white text-base sm:text-lg md:text-xl font-bold transition duration-500">

    <li className="text-white text-base sm:text-lg md:text-xl font-bold hover:text-indigo-600 transition">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600 underline transition" : ""}>Home</NavLink>
    </li>
    <li className="text-white text-base sm:text-lg md:text-xl font-bold hover:text-indigo-600 transition">
      <NavLink to="dashboard" className={({ isActive }) => isActive ? "text-indigo-600 underline transition" : ""}>Dashboard</NavLink>
    </li>
    <li className="text-white text-base sm:text-lg md:text-xl font-bold hover:text-indigo-600 transition">
      <NavLink to="news" className={({ isActive }) => isActive ? "text-indigo-600 underline transition" : ""}>News</NavLink>
    </li>
    <li className="text-white text-base sm:text-lg md:text-xl font-bold hover:text-indigo-600 transition">
      <NavLink to="register" className={({ isActive }) => isActive ? "text-indigo-600 underline transition" : ""}>Register</NavLink>
    </li>
    <li className="text-white text-base sm:text-lg md:text-xl font-bold hover:text-indigo-600 transition">
      <NavLink to="predict" className={({ isActive }) => isActive ? "text-indigo-600 underline transition" : ""}>Prediction</NavLink>
    </li>
  </ul>

  <NavLink
    to="login"
    className="px-4 py-2 border bg-green-400 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 text-sm sm:text-base whitespace-nowrap"
  >
    Login
  </NavLink>
</nav>
    </>
  );
};

export default Nav;
