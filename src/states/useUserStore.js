import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",

      login: async (input) => {
        try {
          const response = await axios.post(
            "http://localhost:8899/auth/login",
            input,
            {
              withCredentials: true,
            }
          );

          if (response.data?.token) {
            set({ token: response.data.token, user: response.data.user });
            return response.data;
          } else {
            throw new Error("Login response missing token.");
          }
        } catch (err) {
          console.error("Login error:", err.response?.data || err.message);
          throw (
            err.response?.data?.message ||
            "Login failed due to an unknown error."
          );
        }
      },

      logout: () => {
        set({ token: "", user: null });
        toast.success("Logout")
      },
    }),
    {
      name: "user-storage", // Storage key name
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
