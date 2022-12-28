import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const CompletedTask = () => {
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
                        <tr className="bg-slate-200 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Learn New Technology
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            20 min ago
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="flex gap-2">
                              <button>
                                <MdOutlineCancel size="16" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedTask;
