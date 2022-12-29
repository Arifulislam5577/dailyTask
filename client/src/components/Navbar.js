import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/services/authService";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  showNav &&
    window.addEventListener("scroll", () => {
      setShowNav(false);
    });

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut);
  };
  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" dark:text-white font-bold">
            DailyTask
          </Link>
        </div>
        <ul className="lg:flex items-center justify-between gap-5 text-sm dark:text-white hidden">
          <li>
            <Link to={`/login?redirect=/addTask`}>Add Task</Link>
          </li>
          <li>
            <Link to={`/login?redirect=/myTask`}>My Task</Link>
          </li>
          <li>
            <Link to={`/login?redirect=/completed`}>Completed Task</Link>
          </li>
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-8 py-2.5 dark:bg-red-500  rounded-full"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-8 py-2.5 dark:bg-red-500  rounded-full"
              >
                Join Us
              </Link>
            )}
          </li>

          <li>
            <button>
              <BsSun size={20} />
            </button>
          </li>
        </ul>
        <div className="flex items-center justify-bewtween gap-5 text-white lg:hidden">
          <button>
            <BsSun size={28} />
          </button>
          <button onClick={() => setShowNav(!showNav)}>
            <HiOutlineMenuAlt3 size={32} />
          </button>
        </div>

        <ul
          className={`text-white lg:hidden text-base w-full md:w-2/5 bg-slate-900 h-full top-0 right-0 z-10 flex-col flex items-center justify-center  gap-5 fixed ${
            showNav ? "translate-x-0" : "translate-x-full"
          } duration-300 transition-all
          }`}
        >
          <button
            className="absolute top-10 left-10"
            onClick={() => setShowNav(!showNav)}
          >
            <FaTimes size="32" />
          </button>
          <li>
            <Link to={`/login?redirect=/addTask`}>Add Task</Link>
          </li>
          <li>
            <Link to={`/login?redirect=/myTask`}>My Task</Link>
          </li>
          <li>
            <Link to={`/login?redirect=/completed`}>Completed Task</Link>
          </li>
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-8 py-2.5 dark:bg-red-500  rounded-full"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-8 py-2.5 dark:bg-red-500  rounded-full"
              >
                Join Us
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
