import DropIndicator from "./DropIndicator";
import DataContext from "../context/DataContext";
import EditCard from "./EditCard";
import { useContext } from "react";

const Card = ({
  task,
  id,
  column,
  handleDragStart,
  datetime,
  handleSelect,
}) => {
  const { openModal, setOpenModal } = useContext(DataContext);
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <section
        onClick={() => handleSelect(id)}
        draggable="true"
        className="task-card"
        onDragStart={(e) => handleDragStart(e, { task, id, column })}
      >
        <div className="task-text">{task}</div>
        <p className="time">{datetime}</p>
      </section>
      {/* <EditCard
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        key={Card.id}
      /> */}
    </>
  );
};

export default Card;
