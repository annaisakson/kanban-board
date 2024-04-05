// import components
import Column from "../components/Column";
import Delete from "../components/Delete";
// other imports
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useContext } from "react";

// the page you get to if you click on the column title
const DonePage = ({}) => {
  const { cards, setCards } = useContext(DataContext);
  return (
    <article className="parent-div">
      <Link to={"/"}>
        <RiArrowGoBackLine />
      </Link>
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
