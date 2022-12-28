import React from "react";

const AddMedia = () => {
  return (
    <div>
      <div className=" rounded bg-gray-200 overflow-hidden">
        <img src="https://picsum.photos/1920/500" alt="" />
      </div>
      <div className="lg:w-1/2 md:w-2/3 w-4/5 mx-auto">
        <form className="-mt-20 ">
          <div className="mb-4">
            <input
              type="text"
              className="rounded px-5 py-4 w-full focus:outline-none focus:border-b-2 bg-white text-slate-900 placeholder:text-sm placeholder:text-gray-400 transition-all duration-500"
              placeholder="Learn Data Structure"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <button className="bg-red-500 w-full py-3.5 rounded capitalize text-sm text-white">
              Add media task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedia;
