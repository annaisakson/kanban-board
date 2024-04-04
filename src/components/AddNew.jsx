import { useState } from "react";
import { format } from "date-fns";
import DataContext from "../context/DataContext";
import { useContext } from "react";

const AddNew = ({ column, setCards }) => {
  const { text, setText } = useContext(DataContext);
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;
    const datetime = format(new Date(), "MMMM dd, yyyy - HH:m");

    const newCard = {
      column,
      task: text.trim(),
      id: Math.random().toString(),
      datetime,
    };

    setCards((cards) => [...cards, newCard]);
    setAdding(false);
    {
      document.getElementById("add-input").value = "";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="add-input"
          type="text"
          className="add-input"
          placeholder="+"
          onChange={(e) => setText(e.target.value)}
          onClick={() => setAdding(true)}
        ></input>
        {adding && (
          <div className="button-container">
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default AddNew;
