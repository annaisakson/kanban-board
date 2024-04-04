import Column from "./Column";
import Delete from "./Delete";

const DoingPage = ({ cards, setCards }) => {
  return (
    <article className="parent-div">
      <section className="board">
        <Column
          title="DOING"
          column="Doing"
          titleColor="yellow"
          cards={cards}
          setCards={setCards}
        />
      </section>
      <Delete setCards={setCards} />{" "}
    </article>
  );
};

export default DoingPage;
