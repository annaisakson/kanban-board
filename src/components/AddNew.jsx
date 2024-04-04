import { useState } from "react";

const AddNew = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      task: text.trim(),
      id: Math.random().toString(),
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
            {/* <button onClick={() => setAdding(false)} className="close-button">
            Close
          </button> */}
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
