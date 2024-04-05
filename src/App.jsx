import Board from "./components/Board";
import DoingPage from "./pages/DoingPage";
import DonePage from "./pages/DonePage";
import TodoPage from "./pages/TodoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { DataProvider } from "./context/DataContext";
import DataContext from "./context/DataContext";

function App() {
  const { cards, setCards } = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);

  // // see if cards have changed and then save to local storage
  // useEffect(() => {
  //   hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  // }, [cards]);

  // // get data from local storage if we have any
  // useEffect(() => {
  //   const cardData = localStorage.getItem("cards");

  //   setCards(cardData ? JSON.parse(cardData) : []);

  //   setHasChecked(true);
  // }, []);

  return (
    <>
      <DataProvider>
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
      </DataProvider>
    </>
  );
}

export default App;
