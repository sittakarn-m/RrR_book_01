import React from "react";
import ProductList from "../../components/ProductList";
import batman_hero_01 from "../../assets/batman_hero_01.png";
import repeat_workshop from "../../assets/repeat_workshop.jpg";
import LibrarySlider02 from "../../components/LibrarySlider02";

export default function Store() {
  return (
    <div className="min-h-fit mb-15 pb-20 pt-40">
      {/* photo bar */}
      <div className="flex justify-center">
        <div
          className="hero bg-cover bg-center h-[400px] skeleton opacity-10 absolute"
          style={{ backgroundImage: `url(${repeat_workshop})` }}
        ></div>
        <div className="hero-content text-center  h-[400px] opacity-90">
          <div className="max-w-md flex justify-center items-center ">
            <h1 className="text-5xl font-bold text-white bg-blue-400 w-[800px] py-5  ">
              {`rent read return>`}
            </h1>
          </div>
        </div>
      </div>

      {/* body */}
      <div>
        <div className="p-4">
          <h1 className="text-[40px] font-bold mt-10 ml-[90px]">New comming</h1>
          {/* image */}
          <div className="mb-10 flex justify-center my-4 p-4 ">
            <LibrarySlider02 />
          </div>
        </div>

        {/* product */}
        <div className="p-4">
          {/* card */}

          <ProductList />
        </div>
      </div>
    </div>
  );
}
