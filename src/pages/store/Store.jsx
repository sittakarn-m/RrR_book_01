import React from "react";
import ProductList from "../../components/ProductList";

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

          <ProductList/>


        </div>
      </div>
    </div>
  );
}
