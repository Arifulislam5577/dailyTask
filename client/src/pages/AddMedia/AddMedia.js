import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShowError from "../../components/ShowError";
import { reset } from "../../redux/features/mediaTask/mediaSlice";
import { createMediaTask } from "../../redux/services/mediaTaskService";
const AddMedia = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.mediaTask);
  const [task, setTask] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleImg = (e) => {
    const selectedImg = e.target.files[0];
    previewImage(selectedImg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !task) {
      return;
    }
    dispatch(createMediaTask({ task, image }));
  };

  useEffect(() => {
    if (success) {
      navigate("/myTask/mediaTask");
      dispatch(reset());
    }
  }, [success, dispatch, navigate]);

  return (
    <div>
      {!image ? (
        <div className=" rounded bg-gray-200 py-20 overflow-hidden"></div>
      ) : (
        <div className=" rounded bg-gray-200 overflow-hidden opacity-60">
          <img src={image} alt="" className="h-32 w-full object-cover" />
        </div>
      )}
      <div className="lg:w-1/2 md:w-2/3 w-4/5 mx-auto mt-5 z-10 opacity-100">
        <form onSubmit={handleSubmit}>
          {error && <ShowError message={error} />}
          <div className="mb-4">
            <input
              type="text"
              className="rounded px-5 py-4 w-full focus:outline-none focus:border-b-2 bg-white text-slate-900 placeholder:text-sm placeholder:text-gray-400 transition-all duration-500"
              placeholder="Learn Data Structure"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF(1920x1080)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  onChange={(e) => handleImg(e)}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-red-500 w-full py-3.5 rounded capitalize text-sm text-white"
            >
              {loading ? "Loading..." : "Add task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedia;
