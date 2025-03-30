import React, { useEffect, useState } from "react";
import { useCategoryStore } from "../states/useCategoryStore";

const CategoryList = () => {
  const {
    category,
    loading,
    error,
    errorMsg,
    fetchCategory,
    deleteCategory,
    editCategory,
    createCategory,
  } = useCategoryStore();

  // Local state for Edit
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Local state for Add
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCategoryId, setNewCategoryId] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{errorMsg}</p>;

  // Edit Functions
  const handleEdit = (id, currentName) => {
    setEditId(id);
    setEditName(currentName);
    setIsEditModalOpen(true);
  };

  // Edit Submit
  const handleEditSubmit = async () => {
    await editCategory(editId, { name: editName });
    setIsEditModalOpen(false);
  };

  // Add Submit
  const handleAddSubmit = async () => {
    if (newCategoryName.trim() === "" || newCategoryId.trim() === "") return;

    await createCategory({
      id: Number(newCategoryId),
      name: newCategoryName,
    });

    // Reset & Close modal
    setIsAddModalOpen(false);
    setNewCategoryId("");
    setNewCategoryName("");
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-[30px] mb-6 font-bold bg-white w-fit p-4 rounded-md ">
        Category List
      </h1>

      {/* Add Category Button */}
      <div>
        <button
          className="btn ml-4 w-[7rem] bg-white"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add
        </button>
      </div>

      <div className="overflow-x-auto rounded-box border border-base-100 bg-base-100 m-4 shadow p-5 w-[600px] ">
        <table className="table text-[20px]">
          <thead>
            <tr className="text-[18px]">
              <th>ID</th>
              <th>Category Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {category.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>
                  <button
                    onClick={() => handleEdit(cat.id, cat.name)}
                    className="btn btn-outline btn-accent rounded-md"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="btn btn-outline btn-error rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <dialog
        id="editModal"
        className={`modal ${isEditModalOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Category Name</h3>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Edit Category"
            className="input input-bordered w-full mb-4"
          />
          <div className="flex justify-end gap-2">
            <button onClick={handleEditSubmit} className="btn shadow">
              Save
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="btn shadow"
            >
              Cancel
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsEditModalOpen(false)}>close</button>
        </form>
      </dialog>

      {/* Add Modal */}
      <dialog
        id="addModal"
        className={`modal ${isAddModalOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Add New Category</h3>

          {/* Input ID */}
          <input
            type="text"
            value={newCategoryId}
            onChange={(e) => setNewCategoryId(e.target.value)}
            placeholder="Category ID"
            className="input input-bordered w-full mb-4"
          />

          {/* Input Name */}
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Category Name"
            className="input input-bordered w-full mb-4"
          />

          <div className="flex justify-end gap-2">
            <button onClick={handleAddSubmit} className="btn shadow">
              Add
            </button>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="btn shadow"
            >
              Cancel
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsAddModalOpen(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CategoryList;
