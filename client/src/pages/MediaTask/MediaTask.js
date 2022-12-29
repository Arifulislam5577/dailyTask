import React, { useEffect } from "react";
import TaskLayout from "../../components/TaskLayout";
import ShowError from "../../components/ShowError";
import { useDispatch, useSelector } from "react-redux";
import { getMediaTask } from "../../redux/services/mediaTaskService";
const MediaTask = () => {
  const { loading, error, tasks } = useSelector((state) => state.mediaTask);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMediaTask());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="flex items-center justify-center my-20">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-600"></div>
      </section>
    );
  } else if (error) {
    return <ShowError message={error} />;
  } else {
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {Array.isArray(tasks)
        ? tasks.map((task) => <TaskLayout task={task} key={task._id} />)
        : null}
    </div>
  );
};

export default MediaTask;
