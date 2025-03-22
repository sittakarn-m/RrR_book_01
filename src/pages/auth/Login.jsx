import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../states/useUserStore";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    identifier: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Role-based redirect
  const roleRedirect = (role) => {
    console.log("User Role:", role);
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/store");
    }
  };

  const hdlLogin = async (e) => {
    e.preventDefault();

    if (!(input.identifier.trim() && input.password.trim())) {
      return toast.warn("Please fill in all fields");
    }

    try {
      const data = await login(input);
      console.log("Login Successful:", data);

      if (data?.user?.role) {
        toast.success("Login Successful!",{});
        
        roleRedirect(data.user.role);
      } else {
        toast.error("Login failed: Invalid user data received.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(`Login Failed: ${err}`);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-ghost text-[18px]"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Login
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex justify-center">
            <h3 className="font-bold text-[50px] mb-3">Login</h3>
          </div>

          <form onSubmit={hdlLogin}>
            <div className="flex gap-3 ml-4 mt-5">
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Email or User Name"
                    className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                    name="identifier"
                    value={input.identifier}
                    onChange={hdlChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                    name="password"
                    value={input.password}
                    onChange={hdlChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end mr-7">
              <button className="btn text-[18px] bg-purple-200">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
