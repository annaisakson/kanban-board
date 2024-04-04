import React, { useEffect, useState } from "react";
import Column from "./Column";
import Delete from "./Delete";

const Board = ({ cards, setCards, setOpenModal }) => {
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
