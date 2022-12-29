import React from "react";

const TaskLayout = (props) => {
  const { image, task } = props.task;
  return (
    <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded h-1/2  object-cover w-full" src={image} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {task}
        </h5>

        <button className="inline-flex items-center px-5 py-2 text-xs font-medium text-center text-white bg-slate-700 rounded-full  ">
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskLayout;
