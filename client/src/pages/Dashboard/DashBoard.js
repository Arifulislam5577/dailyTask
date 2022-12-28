import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const taskRoute = [
    { id: 1, path: "/myTask", title: "My Task" },
    { id: 2, path: "/myTask/mediaTask", title: "My Media Task" },
    { id: 3, path: "/myTask/addMediaTask", title: "Add Media Task" },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-1 w-full ">
            <ul className="flex flex-col gap-3 text-center">
              {taskRoute.map((task) => (
                <li key={task.id} className="">
                  <Link
                    className="text-sm p-5 bg-red-500 block w-full font-bold text-slate-100 text-center"
                    to={task.path}
                  >
                    {task.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
