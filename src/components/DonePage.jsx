import Column from "./Column";
import Delete from "./Delete";

const DonePage = ({ cards, setCards }) => {
  return (
    <article className="parent-div">
      <section className="board">
        <Column
          title="DONE"
          column="Done"
          titleColor="green"
          cards={cards}
          setCards={setCards}
        />
      </section>
      <Delete setCards={setCards} />{" "}
    </article>
  );
};

export default DonePage;
