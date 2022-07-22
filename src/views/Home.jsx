import React, { useState } from "react";
import AddBug from "../components/AddBug";
import CurrentBug from "../components/CurrentBug";
import "../App.css";

function Home() {
  const [addIssue, setAddBug] = useState(true);

  function showAddBug() {
    setAddBug(true);
  }

  function showCurrentBug() {
    setAddBug(false);
  }

  return (
    <div className="App">
      <h1>Bugsy Tracker</h1>
      <div className="gray-card-container">
        {addIssue ? <AddBug /> : <CurrentBug />}
      </div>
      <div className="view-selection-div">
        <button className="view-button" onClick={() => showCurrentBug()}>
          Current Bug
        </button>
        <button
          className="view-button active-button"
          onClick={() => showAddBug()}
        >
          Add Bug
        </button>
      </div>
    </div>
  );
}

export default Home;