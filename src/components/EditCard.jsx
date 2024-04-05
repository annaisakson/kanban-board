import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const EditCard = ({ task, openModal }) => {
  if (!openModal) return null;
  const { text, setText, cards, setCards, setOpenModal } =
    useContext(DataContext);
  const [editTask, setEditTask] = useState(task);

  const handleEdit = (e) => {
    setEditTask({
      ...editTask,
      task: e.target.textContent, // Update task directly from innerText
    });
  };

  const handleSave = () => {
    const editedCards = cards.map((task) =>
      task.id === editTask.id ? editTask : task
    );
    setCards(editedCards);
    handleClose();
    console.log(task);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <article onClick={handleClose} className="modal-overlay">
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <form className="edit-card">
          <button type="button" className="close" onClick={handleClose}>
            X
          </button>
          <label htmlFor="edit-text">Edit text</label>
          <div
            suppressContentEditableWarning
            contentEditable
            onBlur={handleEdit}
            className="editable-content"
          >
            {editTask.task}
          </div>
          <button type="button" className="submit" onClick={handleSave}>
            Save
          </button>
        </form>
      </section>
    </article>
  );
};

export default EditCard;
