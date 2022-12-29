import React from "react";

const TableLoader = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-10  dark:bg-gray-400 animate-pulse"></div>
      <div className="w-full h-10  dark:bg-gray-400 animate-pulse"></div>
      <div className="w-full h-10  dark:bg-gray-400 animate-pulse"></div>
      <div className="w-full h-10  dark:bg-gray-400 animate-pulse"></div>
      <div className="w-full h-10  dark:bg-gray-400 animate-pulse"></div>
    </div>
  );
};

export default TableLoader;
