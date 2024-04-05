// import components
import DropIndicator from "./DropIndicator";

// card component
const Card = ({
  task,
  id,
  column,
  handleDragStart,
  datetime,
  handleSelect,
}) => {
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
    </>
  );
};

export default Card;
