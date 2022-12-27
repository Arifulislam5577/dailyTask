import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/">DailyTask</Link>
        </div>
        <ul className="flex items-center justify-between gap-5 text-sm text-white">
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
            <Link to="/login" class="px-8 py-2.5 bg-primary rounded-full">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
