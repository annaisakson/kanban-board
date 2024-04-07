// import components
import Column from "./Column";
import Delete from "./Delete";
import EditCard from "./EditCard";
// other imports
import DataContext from "../context/DataContext";
import { useContext, useState } from "react";

const Board = ({}) => {
  const { cards, setCards, setOpenModal, openModal } = useContext(DataContext);
  const [selectedTask, setSelectedTask] = useState(null);

  // handle which card is being clicked
  const handleSelect = (cardId) => {
    const newSelectedTask = cards.find((card) => card.id === cardId);
    setSelectedTask(newSelectedTask);
    setOpenModal(true);
  };

  return (
    // render three different columns, trashbin and the edit modal
    <article className="parent-div">
      <section className="board">
        <Column
          title="TODO"
          column="ToDo"
          titleColor="#e6a9b8"
          cards={cards}
          setCards={setCards}
          setOpenModal={setOpenModal}
          handleSelect={handleSelect}
        />
        <Column
          title="DOING"
          column="Doing"
          titleColor="rgb(253, 253, 105)"
          cards={cards}
          setCards={setCards}
          setOpenModal={setOpenModal}
          handleSelect={handleSelect}
        />
        <Column
          title="DONE"
          column="Done"
          titleColor="#7bc57b"
          cards={cards}
          setCards={setCards}
          setOpenModal={setOpenModal}
          handleSelect={handleSelect}
        />
      </section>
      <Delete setCards={setCards} />{" "}
      <EditCard
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        task={selectedTask}
      />
    </article>
  );
};

export default Board;
