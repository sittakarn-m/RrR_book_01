import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validator"; // Adjust the import path
import { toast } from "react-toastify";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      street: "",
      zipCode: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8899/auth/register",
        data,
        {
          withCredentials: true,
        }
      );
      console.log("Registration successful:", response.data);
      reset();
      toast.success("Registration successful!");
    } catch (err) {
      console.error(
        "Registration failed:",
        err.response?.data?.message || err.message
      );
      toast.error("Registration failed: " + err.response?.data?.message);
    }
  };

  // const hdlOnChange = (e) => {
  //   // code body
  //   setValue({
  //     ...register,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div>
      <button
        type="button"
        className="btn btn-ghost text-[18px]"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Register
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex justify-center">
            <h3 className="font-bold text-[50px] mb-3">Register</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3 ml-4 mt-5">
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="User Name"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("userName")}
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm">
                    {errors.userName.message}
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Address Information"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Street"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("street")}
                />
                {errors.street && (
                  <p className="text-red-500 text-sm">
                    {errors.street.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm">
                    {errors.zipCode.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Phone number"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 bg-transparent w-50 max-w-xs border-b-[1px] border-neutral-200"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end mr-7">
              <button type="submit" className="btn text-[18px] bg-purple-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Register;
