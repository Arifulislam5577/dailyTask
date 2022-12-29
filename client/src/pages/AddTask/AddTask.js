import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../redux/services/taskService";
import ShowError from "../../components/ShowError";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/features/task/taskSlice";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const { success, error } = useSelector((state) => state.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      return;
    }
    dispatch(createTask(task));
  };

  useEffect(() => {
    if (success) {
      navigate("/myTask");
      dispatch(reset());
    }
  }, [success, navigate, dispatch]);

  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      <div className="container">
        <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
          <form onSubmit={handleSubmit}>
            {error && <ShowError message={error} />}
            <input
              type="text"
              className="rounded-full px-5 py-4 w-full focus:outline-none focus:border-b-2 border-b-red-500 placeholder:text-sm placeholder:text-gray-400 transition-all duration-500"
              placeholder="Learn New Technology etc."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTask;
