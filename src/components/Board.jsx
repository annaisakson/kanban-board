import Column from "./Column";
import Delete from "./Delete";
import EditCard from "./EditCard";
import DataContext from "../context/DataContext";
import { useContext } from "react";

const Board = ({}) => {
  const { cards, setCards, setOpenModal, openModal } = useContext(DataContext);
  return (
    <article className="parent-div">
      <section className="board">
        <Column
          title="TODO"
          column="ToDo"
          titleColor="pink"
          cards={cards}
          setCards={setCards}
          setOpenModal={setOpenModal}
        />
        <Column
          title="DOING"
          column="Doing"
          titleColor="yellow"
          cards={cards}
          setCards={setCards}
          setOpenModal={setOpenModal}
        />
        <Column
          title="DONE"
          column="Done"
          titleColor="green"
          cards={cards}
          setCards={setCards}
          setOpenModal={setOpenModal}
        />
      </section>
      <Delete setCards={setCards} />{" "}
      <EditCard openModal={openModal} closeModal={() => setOpenModal(false)} />
    </article>
  );
};

export default Board;
