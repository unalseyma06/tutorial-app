import axios from "axios";
import React, { useEffect, useState } from "react";

function EditTutorial({ editItem, getTutorial }) {
  const { id, title: newTitle, description: newDescription } = editItem;
  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);

  const editNewTutorial = async (id, newTutorial) => {
    const url = "";
    try {
      await axios.put(`${url}/${id}`, newTutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };

  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
  }, [newDescription, newTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editNewTutorial(id, { title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTutorial;
