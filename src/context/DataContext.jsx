import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");

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
    <DataContext.Provider
      value={{
        cards,
        setCards,
        hasChecked,
        setHasChecked,
        openModal,
        setOpenModal,
        text,
        setText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
