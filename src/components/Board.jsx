import React, { useEffect, useState } from "react";
import Column from "./Column";
import Delete from "./Delete";

const Board = () => {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  // see if cards have changed and then save to local storage
  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  // get data from local storage if we have any
  useEffect(() => {
    const cardData = localStorage.getItem("cards");

    setCards(cardData ? JSON.parse(cardData) : []);

    setHasChecked(true);
  }, []);

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
        <Column
          title="DOING"
          column="Doing"
          titleColor="yellow"
          cards={cards}
          setCards={setCards}
        />
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

// const default_cards = [
//   // TODO
//   {
//     task: "vattna blommor",
//     id: "1",
//     column: "ToDo",
//   },
//   {
//     task: "cuddla Ben",
//     id: "2",
//     column: "ToDo",
//   },
//   {
//     task: "pussa Jake",
//     id: "3",
//     column: "ToDo",
//   },

//   // DOING
//   {
//     task: "plugga",
//     id: "4",
//     column: "Doing",
//   },

//   // DONE
//   {
//     task: "pleepa",
//     id: "6",
//     column: "Done",
//   },
// ];

export default Board;
