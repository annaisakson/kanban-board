import Column from "./Column";
import Delete from "./Delete";

const TodoPage = ({ cards, setCards }) => {
  return (
    <article className="parent-div">
      <section className="board">
        <Column
          title="TODO"
          column="ToDo"
          titleColor="pink"
          cards={cards}
          setCards={setCards}
        />
      </section>
      <Delete setCards={setCards} />{" "}
    </article>
  );
};

export default TodoPage;
