import Board from "./components/Board";
import DoingPage from "./components/DoingPage";
import DonePage from "./components/DonePage";
import TodoPage from "./components/TodoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import EditCard from "./components/EditCard";

function App() {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    <>
      <EditCard openModal={openModal} closeModal={() => setOpenModal(false)} />
      <Router>
        <Routes>
          <Route
            index
            element={
              <Board
                cards={cards}
                setCards={setCards}
                setOpenModal={setOpenModal}
              />
            }
          />
          <Route
            path="/todo"
            element={<TodoPage cards={cards} setCards={setCards} />}
          />
          <Route
            path="/doing"
            element={<DoingPage cards={cards} setCards={setCards} />}
          />
          <Route
            path="/done"
            element={<DonePage cards={cards} setCards={setCards} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
