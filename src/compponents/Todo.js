import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {

  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [OpenDialog, SetDialogOpen] = useState(false);

  const handleModalOpen = () => {
    SetDialogOpen(true)
  }
  const handleModalClose = () => {
    SetDialogOpen(false)
  }

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };


  return (
    <div className="todo">
       {OpenDialog && <div className="modal-backdrop"></div>}
      <p
        style={{ textDecoration: todo.completed && "line-through" }}

      >{newTitle} </p>

      <dialog open={OpenDialog} >
        <textarea
          style={{ textDecoration: todo.completed && "line-through" }}
          type="text"
          value={todo.title === "" ? newTitle : todo.title}
          className="list"
          onChange={handleChange}
        ></textarea>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          Editar
        </button>
        <button className="closeModal" onClick={handleModalClose}>fechar</button>
      </dialog>
      <div className="botao">
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={handleModalOpen}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );


}