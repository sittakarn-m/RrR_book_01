import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../states/useCartStore";
import { toast } from "react-toastify";

const ProductList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { addToCart, fetchCart } = useCartStore();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8899/book/list");
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []); 

  useEffect(() => {
    fetchCart(); 
  }, []); 

  // Book id
  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`); // Navigate to the book detail page
  };

  const handleAddToCart = async (book, count) => {
    try {
      console.log("book:", book);

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
      <h1 className="text-2xl font-bold mb-4">สินค้าทั้งหมด</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="p-4 border rounded-lg shadow-lg flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <div
              onClick={() => handleBookClick(book.id)} // Pass a function here
              key={book.id}
              className="bg-slate-400 w-[160px] h-[220px]"
            >
              Pic
            </div>
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-green-600 mb-2">Price: {book.pricePerDay} Baht/Day</p>
            <button onClick={() => handleAddToCart(book, 1)} className="btn">
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
