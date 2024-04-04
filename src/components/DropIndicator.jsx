// indicators for where you will drop the card

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="drop"
      id="drop"
    ></div>
  );
};

export default DropIndicator;
