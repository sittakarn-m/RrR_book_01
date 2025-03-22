import axios from "axios";
import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: null,
  loading: false,
  error: null,
  errorMsg: "",

  fetchCart: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("http://localhost:8899/user/cart", {
        withCredentials: true, // ยังใช้ cookie-based session
      });
      console.log("Cart Data:", res.data);
      set({ cart: res.data, loading: false });
    } catch (error) {
      console.error("Fetch Error:", error);
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error fetching cart",
        loading: false,
        cart: null,
      });
    }
  },

  addToCart: async (bookId, count) => {
    try {
      await axios.post(
        "http://localhost:8899/user/cart",
        { bookId, count },
        {
          withCredentials: true,
        }
      );

      get().fetchCart();
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error adding to cart",
      });
    }
  },

  removeFromCart: async (itemId) => {
    try {
      await axios.delete(`http://localhost:8899/user/cart/${itemId}`, {
        withCredentials: true,
      });
      get().fetchCart();
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error removing item",
      });
    }
  },

  updateCartItem: async (bookOnCartId, count) => {
    try {
      await axios.put(
        "http://localhost:8899/user/cart",
        { bookOnCartId, count },
        { withCredentials: true }
      );

      // Always refresh cart!
      get().fetchCart();
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error updating cart",
      });
    }
  },

  checkout: async () => {
    try {
      const res = await axios.post(
        "http://localhost:8899/user/checkout",
        {},
        { withCredentials: true }
      );

      set({ cart: null });
      return res.data;
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error during checkout",
      });
    }
  },
}));
