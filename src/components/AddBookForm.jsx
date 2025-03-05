import React, { useState } from "react";
import axios from "axios";

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
    e.preventDefault(); // ✅ Fix missing parentheses

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

      alert("Book added successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Adding book failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Publisher"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
      />
      <textarea
        placeholder="Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price Per Day"
        value={pricePerDay}
        onChange={(e) => setPricePerDay(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input
        type="number"
        placeholder="Category ID"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <input type="file" onChange={(e) => setCoverImage(e.target.files[0])} />

      <button type="submit">เพิ่มหนังสือ</button>
    </form>
  );
}

export default AddBookForm;
