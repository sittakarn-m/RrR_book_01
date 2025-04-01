import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../states/useCartStore";
import { toast } from "react-toastify";
import { useBookStore } from "../states/useBookStore";

const ProductList = () => {
  const navigate = useNavigate();
  const { addToCart, fetchCart } = useCartStore();
  const { books, fetchBooks, query, loading, error, errorMsg } = useBookStore();

  useEffect(() => {
    fetchBooks();
    fetchCart();
  }, []);
  console.log(books);

  useEffect(() => {
    const scrollY = localStorage.getItem("scrollPosition");
    if (scrollY && books.length > 0) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(scrollY), behavior: "smooth" });
        localStorage.removeItem("scrollPosition");
      }, 100);
    }
  }, [books]);

  // Book id
  const handleBookClick = (bookId) => {
    localStorage.setItem("scrollPosition", window.scrollY);
    navigate(`/book/${bookId}`);
  };

  const handleAddToCart = async (book, count) => {
    try {
      console.log("book: ====>", book);

      if (book.status === "UNAVAILABLE") {
        return toast.warning(`${book.title} out of Stock`);
      }

      await addToCart(book.id, count);
      await fetchCart();
      toast.success(`Add ${book.title} to cart!`);
    } catch (error) {
      console.error("Someting wrong:", error);
      toast.error("Can not add item to cart, Please try again!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {query ? `Results for "${query}"` : "All Books"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookClick(book.id)}
            className="p-4 border rounded-lg shadow-lg flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <div key={book.id} className="bg-slate-400 w-[160px] h-[220px]">
              Pic
            </div>
            <h2 className="text-[22px] font-semibold text-neutral-800 ">
              {book.title}
            </h2>
            <p className="text-gray-600 text-[14px] mb-4">{book.status}</p>
            <p className="text-neutral-800 text-[16px] font-thin mb-2">
              Price:{" "}
              <span className="text-green-800 font-bold">
                {book.pricePerDay}
              </span>{" "}
              Baht/Day
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(book, 1);
              }}
              className="btn btn-active btn-accent hover:bg-blue-400 shadow-sm "
            >
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
