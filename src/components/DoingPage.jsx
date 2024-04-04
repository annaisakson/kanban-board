import Column from "./Column";
import Delete from "./Delete";
import { RiArrowGoBackLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DoingPage = ({ cards, setCards }) => {
  return (
    <article className="parent-div">
      <NavLink to={"/"}>
        <RiArrowGoBackLine />
      </NavLink>
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
