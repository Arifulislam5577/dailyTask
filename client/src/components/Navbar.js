import React from "react";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";
const Navbar = () => {
  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" dark:text-white font-bold">
            DailyTask
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-5 text-sm dark:text-white ">
          <li>
            <Link to="/addTask">Add Task</Link>
          </li>
          <li>
            <Link to="/myTask">My Task</Link>
          </li>
          <li>
            <Link to="/completed">Completed Task</Link>
          </li>
          <li>
            <Link
              to="/login"
              className="px-8 py-2.5 dark:bg-red-500  rounded-full"
            >
              Join Us
            </Link>
          </li>

          <li>
            <button>
              <BsSun size={20} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
