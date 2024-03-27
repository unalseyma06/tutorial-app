import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditTutorial from "./EditTutorial";
import axios from "axios";

function TutorialList({ tutorial, getTutorial }) {
  const [editItem, setEditItem] = useState("");

  const deleteTutorial = async (id) => {
    const url = "";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorial.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FaEdit
                    onClick={() => setEditItem(item)}
                    size={25}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                  />
                  <MdDelete
                    type="button"
                    onClick={() => deleteTutorial(id)}
                    size={25}
                    className="text-danger "
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editItem={editItem} getTutorial={getTutorial} />
    </div>
  );
}

export default TutorialList;
