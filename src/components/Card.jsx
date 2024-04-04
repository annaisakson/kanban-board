import DropIndicator from "./DropIndicator";

const Card = ({ task, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <section
        draggable="true"
        className="task-card"
        onDragStart={(e) => handleDragStart(e, { task, id, column })}
      >
        <div className="task-text">{task}</div>
      </section>
    </>
  );
};

export default Card;
