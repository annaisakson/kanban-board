import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { BsFillTrash2Fill } from "react-icons/bs";

// component for handling the delete function
const Delete = ({ setCards }) => {
  const [active, setActive] = useState(false);

  // when draggin over the trashcan it is highlighted
  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  // if you leave it stops being highlighted
  const handleDragLeave = () => {
    setActive(false);
  };

  // delete card if its dropped
  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((cards) => cards.filter((card) => card.id !== cardId));

    setActive(false);
  };

  return (
    <>
      <section
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`${!active ? "delete" : "active-delete"}`}
      >
        {!active ? <FaTrashCan /> : <BsFillTrash2Fill />}
      </section>
    </>
  );
};

export default Delete;
