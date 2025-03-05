import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserState from "../../states/userState";

function Login() {
  const login = useUserState((state) => state.login);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    identifier: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };


  // Check role and redirect
  const roleRedirect = (role) => {
    console.log("User Role:", role); 
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/store");
    }
  };

  const hdlLogin = async (e) => {
    try {
      e.preventDefault();
      // Validation
      if (!(input.identifier.trim() && input.password.trim())) {
        return alert("Please fill all input");
      }

      // Attempt login
      const data = await login(input);

      console.log("Login Response Data:", data); 


      // user role
      const userRole = data.user.role; 
      
      if (!userRole) {
        console.error("Role not found in response data");
        return;
      }

      alert('Login Successful');
      roleRedirect(userRole);

    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      console.log(errMsg);
      alert(errMsg);
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