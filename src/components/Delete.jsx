import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { BsFillTrash2Fill } from "react-icons/bs";

const Delete = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

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
