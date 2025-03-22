import { create } from "zustand";
import axios from "axios";

export const useCategoryStore = create((set, get) => ({
  category: [],
  loading: false,
  error: null,
  errorMsg: "",

  fetchCategory: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("http://localhost:8899/category");
      set({
        category: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error fetching categories",
        loading: false,
      });
    }
  },

  createCategory: async (newCategory) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "http://localhost:8899/category",
        newCategory
      );
      set((state) => ({
        category: [...state.category, res.data],
        loading: false,
      }));
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error adding category",
        loading: false,
      });
    }
  },

  editCategory: async (id, updatedCategory) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.patch(
        `http://localhost:8899/category/${id}`,
        updatedCategory
      );
      // อัปเดต category ใน state
      set((state) => ({
        category: state.category.map((cat) => (cat.id === id ? res.data : cat)),
        loading: false,
      }));
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error editing category",
        loading: false,
      });
    }
  },

  deleteCategory: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`http://localhost:8899/category/${id}`);
      set((state) => ({
        category: state.category.filter((cat) => cat.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error deleting category",
        loading: false,
      });
    }
  },
}));
