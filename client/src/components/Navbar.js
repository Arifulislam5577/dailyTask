import React from "react";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";
const Navbar = () => {
  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="text-secondary dark:text-white font-bold">
            DailyTask
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-5 text-sm dark:text-white text-primary">
          <li>
            <Link to="/">Add Task</Link>
          </li>
          <li>
            <Link to="/">My Task</Link>
          </li>
          <li>
            <Link to="/">Completed Task</Link>
          </li>
          <li>
            <Link
              to="/login"
              class="px-8 py-2.5 dark:bg-primary bg-secondary rounded-full"
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
