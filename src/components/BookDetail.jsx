import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookStore } from "../states/useBookStore";

const BookDetail = () => {
  const { id } = useParams();
  const { book, fetchBook, error, errorMsg, loading } = useBookStore();

  useEffect(() => {
    fetchBook(id);
  }, [id]);

  if (error) return <div className="text-red-600">{errorMsg}</div>;
  if (loading || !book) return <div className="text-gray-600">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

      {book.coverImage?.url && (
        <img
          src={book.coverImage.url}
          alt={book.title}
          className="w-full max-w-md rounded-md mb-4"
        />
      )}

      <p className="text-lg mb-2">
        <span className="font-semibold">Category:</span> {book.category?.name}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Publisher:</span> {book.publisher}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Detail:</span> {book.detail}
      </p>

      <p className="text-lg mb-2">
        <span className="font-semibold">Price per day:</span> {book.pricePerDay}฿
      </p>
      <p className="text-base text-gray-700 mt-4">{book.description}</p>
    </div>
  );
};

export default BookDetail;
