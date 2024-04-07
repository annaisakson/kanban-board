// import components
import Column from "../components/Column";
import Delete from "../components/Delete";
// other imports
import DataContext from "../context/DataContext";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";

// the page you get to if you click on the column title
const DoingPage = ({}) => {
  const { cards, setCards } = useContext(DataContext);
  return (
    <article className="parent-div">
      <Link to={"/"} className="link">
        <RiArrowGoBackLine />
      </Link>
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
