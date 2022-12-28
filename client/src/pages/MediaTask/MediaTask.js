import React from "react";
import TaskLayout from "../../components/TaskLayout";

const MediaTask = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <TaskLayout />
      <TaskLayout />
      <TaskLayout />
      <TaskLayout />
      <TaskLayout />
    </div>
  );
};

export default MediaTask;
