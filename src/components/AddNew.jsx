import { useState } from "react";
import { format } from "date-fns";
import DataContext from "../context/DataContext";
import { useContext } from "react";

// add new card
const AddNew = ({ column, setCards }) => {
  const { text, setText } = useContext(DataContext);
  const [adding, setAdding] = useState(false);

  // function for when you press the add button
  const handleSubmit = (e) => {
    e.preventDefault();

    // get the date and make a new object with date and text
    if (!text.trim().length) return;
    const datetime = format(new Date(), "dd MMMM, yyyy - HH:mm");

    const newCard = {
      column,
      task: text.trim(),
      id: Math.random().toString(),
      datetime,
    };
    // add the new card to the array
    setCards((cards) => [...cards, newCard]);
    setAdding(false);
    {
      // clear input field
      document.getElementById("add-input").value = "";
    }
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          id="add-input"
          type="text"
          className="add-input"
          placeholder="+ . . ."
          onChange={(e) => setText(e.target.value)}
          onClick={() => setAdding(true)}
        ></input>
        {adding && (
          <button type="submit" className="add-button">
            Add
          </button>
        )}
      </form>
    </>
  );
};

export default AddNew;
