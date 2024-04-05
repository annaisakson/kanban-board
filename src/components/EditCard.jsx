import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

// component for the modal to edit the card
const EditCard = ({ task, openModal }) => {
  if (!openModal) return null;
  const { cards, setCards, setOpenModal } = useContext(DataContext);
  const [editTask, setEditTask] = useState(task);

  // handle editing the text in the modal by chaning the textcontent in the div
  const handleEdit = (e) => {
    setEditTask({
      ...editTask,
      task: e.target.textContent,
    });
  };

  // handle saving the edit by updating the card and closing the modal
  const handleSave = () => {
    const editedCards = cards.map((task) =>
      task.id === editTask.id ? editTask : task
    );
    setCards(editedCards);
    handleClose();
    console.log(task);
  };

  // handle closing the modal
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
