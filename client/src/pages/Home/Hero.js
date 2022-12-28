import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="lg:py-0 py-10">
      <div className="flex items-center justify-between lg:flex-row flex-col">
        <div className=" flex flex-col lg:items-start items-center justify-between">
          <h1 className="lg:text-5xl text-3xl mb-2 tracking-wide text-secondary dark:text-white font-bold">
            What is there in life?
          </h1>
          <p className="text-sm lg:text-left text-center my-3 text-secondary dark:text-gray-100 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            voluptatem praesentium voluptatum ipsum? Doloremque necessitatibus
            libero exercitationem voluptate fugiat? Culpa.
          </p>

          <Link
            to="/login"
            className="text-sm px-5 py-3 rounded-full dark:bg-red-500 mt-3 text-white shadow-2xl inline-block w-36 text-center"
          >
            Join With Us
          </Link>
        </div>
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
