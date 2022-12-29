import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../redux/services/taskService";
import ShowError from "../../components/ShowError";
import { reset } from "../../redux/features/task/taskSlice";
const UpdateTask = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [task, setTask] = useState(state?.task);
  const [status, setStatus] = useState("inCompleted");
  const { loading, success, error } = useSelector((state) => state.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        isCompleted: status === "completed" ? true : false,
        task: task,
        id: state._id,
      })
    );
  };

  useEffect(() => {
    if (success) {
      status === "completed" ? navigate("/completed") : navigate("/myTask");
      dispatch(reset());
    }
  }, [success, navigate, status, dispatch]);
  return (
    <section className="py-5">
      <div className="container">
        <div className="block p-10 rounded-lg shadow-lg bg-slate-800 max-w-sm mx-auto">
          <form onSubmit={handleSubmit}>
            {error && <ShowError message={error} />}
            <div className="form-group mb-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-white text-sm"
              >
                Task Title
              </label>
              <input
                type="text"
                className="form-control block w-full px-3 py-3 text-base font-normal text-slate-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-white text-sm"
              >
                Task Status
              </label>
              <div className="mb-3 w-full">
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-select appearance-none block w-full px-3 py-3 text-sm font-normal text-slate-900 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option defaultValue>InCompleted</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md w-full"
            >
              {loading ? "Loading..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateTask;
