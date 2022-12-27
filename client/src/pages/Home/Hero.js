import React from "react";

const Hero = () => {
  return (
    <div className=" flex items-center justify-center  lg:py-20 flex-col text-center">
      <h1 className="lg:text-5xl text-3xl mb-2 tracking-wide text-secondary dark:text-white font-bold">
        What is there in life?
      </h1>
      <p className="text-sm max-w-md my-3 text-secondary dark:text-gray-100 mx-auto text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        voluptatem praesentium voluptatum ipsum? Doloremque necessitatibus
        libero exercitationem voluptate fugiat? Culpa.
      </p>

      <button className="text-sm px-8 py-3 rounded-full bg-primary mt-3 text-white shadow-2xl animate-pulse">
        Join With Us
      </button>
    </div>
  );
};

export default Hero;
