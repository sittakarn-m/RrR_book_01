import React from "react";
import BookDetail from "../../components/BookDetail";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();
  
  return (
    <div className="mt-20 p-20 bg-neutral-100">
      <BookDetail />
      <div className="flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline m-4"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
