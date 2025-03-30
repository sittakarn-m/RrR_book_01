import { create } from "zustand";
import axios from "axios";

export const useOrderStore = create((set) => ({
  loading: false,
  error: null,
  errorMsg: "",
  order: [],

  // fetch all order
  listOrder: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("http://localhost:8899/order");
      set({ order: res.data, loading: false });
    } catch (error) {
      set({
        error: true,
        loading: false,
        errorMsg: error.response?.data?.message || "Error fetching orders",
      });
    }
  },

  // change order status
  // ChangeStatus

  
}));
