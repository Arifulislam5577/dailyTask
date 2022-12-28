import React from "react";

const AddTask = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      <div className="container">
        <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
          <form>
            <input
              type="text"
              className="rounded-full px-5 py-4 w-full focus:outline-none focus:border-b-2 border-b-red-500 placeholder:text-sm placeholder:text-gray-400 transition-all duration-500"
              placeholder="Learn New Technology etc."
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTask;
