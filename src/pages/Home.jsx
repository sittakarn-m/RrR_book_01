import React from "react";
import Register from "./auth/Register";
import { HeroPic } from "../assets";
import kid_01 from "../assets/kid_01.png";

function Home() {
  return (
    <div className="h-[1800px]">
      <div className="">
        <div className="">
          <div className=" h-[400px] mt-20 flex justify-center items-center  opacity-90">
            <div className="flex justify-center text-[50px]  font-bold text-white my-20 bg-red-600 p-[20px]">
              The Future is Now
              <HeroPic />
            </div>
          </div>

          <div className=" p-4 flex  justify-center">
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn font-bold text-[20px] px-6"
            >
              Join Us
            </button>
          </div>
          <div className="flex justify-center text-[20px] mb-[160px] p-[20px]">
            A reader lives a thousand lives before he dies. The man who never
            reads lives only one.
          </div>
        </div>

        <div className="flex bg-cyan-950 h-[400px] mt-[300px] ">
          <div className="flex-1 ">
            <div className=" mt-[100px]">
              <div className="text-yellow-400 text-[50px]">Library Hub</div>
              <div className="text-white text-[30px]">
                Welcome to our book rental online store
              </div>
            </div>
          </div>
          <div className=" flex-1 bg-red-500 ">
            <div className="bg-white m-4 h-fit">reading ...</div>
          </div>

          <div className="absolute right-0 ">
            <img src={kid_01} alt="" className="h-[80%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
