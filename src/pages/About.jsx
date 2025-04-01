import React from "react";
import LibrarySlider from "../components/LibrarySlider";

function About() {
  return (
    <div className="pt-32 flex justify-between m-6 min-h-screen mx-10">
      <div className="flex-1">
        <LibrarySlider />
      </div>
      <div className="flex-1 bg-neutral-100 rounded-md p-8 h-fit ">
        <div className="bg-white h-full p-4 rounded-md shadow flex justify-center flex-col">
          <h1 className="text-4xl font-bold mb-6 text-center">
            About <span className="text-blue-600">RrR Book</span>
          </h1>

          <p className="text-lg leading-8 mb-6 text-gray-700">
            <strong>RrR Book</strong> is an online book rental platform built on
            the idea of making reading more affordable and accessible for
            everyone. Our concept is simple : 
            <span className="font-semibold text-yellow-600">
                {` Rent Read Return`}
            </span>
          </p>

          <p className="text-lg leading-8 mb-6 text-gray-700">
            Whether you’re a student, a lifelong learner, or just someone who
            loves to explore new worlds through pages, RrR Book provides a
            flexible and cost-effective way to enjoy books without needing to
            own them.
          </p>

          <p className="text-lg leading-8 mb-6 text-gray-700">
            Our growing library offers a wide range of titles — from fiction and
            non-fiction to academic books — all available to rent from the
            comfort of your home. Simply choose the book you want, enjoy reading
            it, and return it when you're done.
          </p>

          <p className="text-lg leading-8 text-gray-700">
            Join us on a journey where stories are shared, not shelved. Let’s
            make reading sustainable, fun, and easy — one book at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
