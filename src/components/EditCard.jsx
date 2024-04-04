import { useState } from "react";

const EditCard = ({ openModal, closeModal }) => {
  if (!openModal) return null;

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
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
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
