import React from "react";

function Register() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-ghost text-[18px] "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Register
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex justify-center">
            <h3 className="font-bold text-[50px] mb-3">Register</h3>
          </div>

          <div className="flex gap-3 ml-4 mt-5">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className=" p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                />
              </div>

              <input
                type="text"
                placeholder="User Name"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
              <input
                type="text"
                placeholder="Password"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Street"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
              <input
                type="text"
                placeholder="Address Infrmation"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end mr-7">
            <button className="btn text-[18px] bg-purple-200">Submit </button>
          </div>

          {/* <p className="py-4 text-sm ">
            Press ESC key or click on ✕ button to close
          </p> */}
        </div>
      </dialog>
    </div>
  );
}

export default Register;
