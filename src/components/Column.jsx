import Card from "./Card";
import AddNew from "./AddNew";
import DropIndicator from "./DropIndicator";
import { useState } from "react";
import { Link } from "react-router-dom";

const Column = ({
  title,
  column,
  titleColor,
  cards,
  setCards,
  setOpenModal,
}) => {
  const [active, setActive] = useState(false);

  // drag and drop cards
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  // function for dropping cards in other columns and clear highlight
  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getHighlight();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  // hightlight column when dragging over
  const handleDragOver = (e) => {
    e.preventDefault();
    highlight(e);
    setActive(true);
  };

  // remove highlight when you drop card
  const clearHighlights = (elements) => {
    const indicators = elements || getHighlight();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  // show where to place the card
  const highlight = (e) => {
    const indicators = getHighlight();
    clearHighlights(indicators);
    const element = getNearestIndicator(e, indicators);
    element.element.style.opacity = "1";
  };

  // function to the exact indicator highlighted
  const getNearestIndicator = (e, indicators) => {
    const distanceOffset = 50;

    const element = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + distanceOffset);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return element;
  };

  // only get highlight for the right column
  const getHighlight = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  // stop highlight after leaving column
  const handleDragLeave = () => {
    setActive(false);
    clearHighlights();
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    // highlight column when dragging over
    <section
      className={`${!active ? "column" : "active-column"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
    >
      <div className="container">
        <Link to={title}>
          <h3 style={{ color: titleColor }}>{title}</h3>
        </Link>
        {filteredCards.map((c) => {
          return (
            <Card
              key={c.id}
              {...c}
              handleDragStart={handleDragStart}
              setOpenModal={setOpenModal}
            />
          );
        })}
        {column === "ToDo" && <AddNew column={column} setCards={setCards} />}
        <DropIndicator beforeId="null" column={column} />
      </div>
    </section>
  );
};

export default Column;
