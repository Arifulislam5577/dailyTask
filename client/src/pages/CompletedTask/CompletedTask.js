import React, { useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import {
  deleteTask,
  getTask,
  updateTask,
} from "../../redux/services/taskService";
import ShowError from "../../components/ShowError";
import { reset } from "../../redux/features/task/taskSlice";
import { useNavigate } from "react-router-dom";

const CompletedTask = () => {
  const dispatch = useDispatch();
  const { tasks, error, success } = useSelector((state) => state.task);
  const navigate = useNavigate();
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  const handleInComplete = (task) => {
    dispatch(
      updateTask({
        isCompleted: false,
        task: task.task,
        id: task._id,
      })
    );
    dispatch(reset());
    navigate("/myTask");
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(getTask(true));
  }, [dispatch]);

  useEffect(() => {
    success && dispatch(getTask(true));
  }, [dispatch, success]);

  if (error) {
    return <ShowError message={error} />;
  }

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-red-500">
              <h1 className="text-sm font-bold text-slate-100 text-center">
                My Completed Task
              </h1>
            </div>
          </div>
          <div className="lg:col-span-3 w-full">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="border-b bg-slate-800">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-100 px-6 py-5 text-left"
                          >
                            My Task
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-100 px-6 py-4 text-left"
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-100 px-6 py-4 text-left"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(tasks)
                          ? tasks?.map((task) => (
                              <tr
                                className="bg-gray-200 border-gray-400 border-b"
                                key={task._id}
                              >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {task?.task}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  {timeAgo.format(new Date(task?.createdAt))}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <div className="flex gap-2">
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => handleInComplete(task)}
                                      >
                                        <MdOutlineCancel size="16" />
                                      </button>

                                      <button
                                        onClick={() => handleDelete(task._id)}
                                      >
                                        <FiTrash2 size="16" />
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedTask;
