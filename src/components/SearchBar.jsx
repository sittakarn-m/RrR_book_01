import React from "react";
import { useBookStore } from "../states/useBookStore"; // อย่าลืมแก้ path ตามจริง

const SearchBar = () => {
  const {
    query,
    category,
    pricePerDay,
    setQuery,
    setCategory,
    setPricePerDay,
    book,
    error,
    errorMsg,
    searchFilter,
    loading,
  } = useBookStore();

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-xl mx-auto">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Search books..."
          className="input input-bordered w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category..."
          className="input input-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />


        <button onClick={searchFilter} className="btn btn-primary">
          Search
        </button>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600">{errorMsg}</div>}

        {Array.isArray(book) && book.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Results:</h2>
            <ul className="list-disc list-inside">
              {book.map((item, idx) => (
                <li key={idx}>{item.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
