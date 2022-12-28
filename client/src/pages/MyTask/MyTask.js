import React from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { BsCheck2Square } from "react-icons/bs";

const MyTask = () => {
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
                <tr className="bg-gray-200 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Learn New Technology
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    20 min ago
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
