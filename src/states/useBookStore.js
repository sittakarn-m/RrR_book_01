import axios from "axios";
import { create } from "zustand";

export const useBookStore = create((set, get) => ({
  books: [],
  book: null,
  query: "",
  category: "",
  pricePerDay: "",
  loading: false,
  error: false,
  errorMsg: "",


  fetchBooks: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:8899/book/list");

      const updatedBooks = await Promise.all(
        res.data.map(async (book) => {
          const status = book.stock === 0 ? "UNAVAILABLE" : "AVAILABLE";

          if (book.status !== status) {
            await axios.patch(`http://localhost:8899/book/${book.id}`, {
              status,
            });
          }

          return { ...book, status };
        })
      );

      set({ books: updatedBooks, loading: false });
    } catch (error) {
      set({
        error: true,
        errorMsg: "Failed to load book list.",
        loading: false,
      });
    }
  },

  updateBookStatus: async (bookId, stock) => {
    try {
      await axios.patch(`http://localhost:8899/book/${bookId}`, {
        stock,
      });
      console.log(`Updated book ${bookId} stock to: ${stock}`);
    } catch (error) {
      console.error("Failed to update book status:", error);
    }
  },

  fetchBook: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.get(`http://localhost:8899/book/${id}`);
      set({ book: res.data, error: false, errorMsg: "", loading: false });
    } catch (err) {
      set({
        error: true,
        errorMsg: "Failed to load book details.",
        loading: false,
      });
    }
  },

  // Search by
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setPricePerDay: (pricePerDay) => set({ pricePerDay }),

  searchFilter: async () => {
    const { query, category, pricePerDay } = get();
    set({ loading: true });

    if (!query) return get().fetchBooks();

    try {
      const res = await axios.post(
        "http://localhost:8899/book/search/filters",
        {
          query,
          category,
          pricePerDay,
        }
      );
      set({ book: res.data, error: false, errorMsg: "", loading: false });
    } catch (error) {
      set({
        error: true,
        errorMsg: error.response?.data?.message || "Error fetching books",
        book: [],
        loading: false,
      });
    }
  },
}));
