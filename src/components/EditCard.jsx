import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const EditCard = ({ openModal, closeModal, onSave }) => {
  if (!openModal) return null;
  const { text, setText } = useContext(DataContext);
  const [editTask, setEditTask] = useState();

  const handleEdit = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave(editTask);
    closeModal();
  };

  return (
    <article onClick={closeModal} className="modal-overlay">
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <form className="edit-card">
          <button type="button" className="close" onClick={closeModal}>
            X
          </button>
          <label htmlFor="edit-text">Edit text</label>
          <textarea
            type="text"
            id="edit-text"
            value={text}
            onChange={handleEdit}
            required
          />
          <button type="button" className="submit" onClick={handleSave}>
            Save
          </button>
        </form>
      </section>
    </article>
  );
};

export default EditCard;
