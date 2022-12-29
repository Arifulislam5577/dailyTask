import React, { useEffect } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { BsCheck2Square } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../redux/services/taskService";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import TableLoader from "../../components/TableLoader";
import ShowError from "../../components/ShowError";
import { useNavigate } from "react-router-dom";
const MyTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, tasks, error } = useSelector((state) => state.task);

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  const handleClick = (task) => {
    navigate("/updateTask", { state: task });
  };

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  if (error) {
    return <ShowError message={error} />;
  }

  if (loading) {
    return <TableLoader />;
  }
  return (
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
                            <button onClick={() => handleClick(task)}>
                              <FiEdit size="16" />
                            </button>
                            <button>
                              <BsCheck2Square size="16" />
                            </button>
                            <button>
                              <FiTrash2 size="16" />
                            </button>
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
  );
};

export default MyTask;
