import { useState } from "react";

const EditCard = ({ openModal, closeModal }) => {
  if (!openModal) return null;

  return (
    <article onClick={closeModal} className="modal-overlay">
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <form className="edit-card" onSubmit={(e) => e.preventDefault}>
          <button type="button" className="close" onClick={closeModal}>
            X
          </button>
          <label htmlFor="edit-text">Edit text</label>
          <textarea type="text" id="edit-text" required />
          <button type="submit" className="submit">
            Save
          </button>
        </form>
      </section>
    </article>
  );
};

export default EditCard;
