import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [detail, setDetail] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("publisher", publisher);
      formData.append("detail", detail);
      formData.append("pricePerDay", pricePerDay);
      formData.append("stock", stock);
      formData.append("categoryId", categoryId);
      if (coverImage) {
        formData.append("coverImage", coverImage);
      }

      await axios.post("http://localhost:8899/book", formData, {
        timeout: 2000,
      });

      toast.success("Book added successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Adding book failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col border w-96 bg-white ">
      <input
        className="border py-3 bg-white" 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border py-3 bg-white"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="border py-3 bg-white"
        type="text"
        placeholder="Publisher"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
      />
      <textarea
        className="border py-3 bg-white"
        placeholder="Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <input
        className="border py-3 bg-white"
        type="number"
        placeholder="Price Per Day"
        value={pricePerDay}
        onChange={(e) => setPricePerDay(e.target.value)}
      />
      <input
        className="border py-3 bg-white"
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input
        className="border py-3 bg-white"
        type="number"
        placeholder="Category ID"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <input
        className="border py-3 bg-white"
        type="file"
        onChange={(e) => setCoverImage(e.target.files[0])}
      />

      <button className="btn rounded-none bg-white text-black hover:bg-neutral-500 hover:text-white" type="submit">
        เพิ่มหนังสือ
      </button>
    </form>
  );
}

export default AddBookForm;
