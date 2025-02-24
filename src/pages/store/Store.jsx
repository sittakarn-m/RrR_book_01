import React from "react";
import ProductTest from "../../components/ProductList";

export default function Store() {
  return (
    <div className="h-[2000px]">
      {/* photo bar */}
      <div className="hero bg-base-200 h-[400px] skeleton">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Photo here</h1>
          </div>
        </div>
      </div>

      {/* body */}
      <div>
        <div className="p-4">
          <h1 className="text-[30px] font-bold mt-10">Heading</h1>
          <h3 className="mb-10">Subheading</h3>
        </div>

        {/* product */}
        <div className="p-4">
          {/* card */}

          {/* <div className="bg-blue-400 w-52 h-72 flex flex-col">
            <div className="bg-green-400 basis-2/3 ">
              <div className=" bg-red-400 h-full">Pic</div>
            </div>
            <div className=" bg-lime-600 basis-1/3">card body</div>
          </div> */}

          <ProductTest/>


        </div>
      </div>
    </div>
  );
}
