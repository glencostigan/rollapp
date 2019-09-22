// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-wrapper";

state = {
  numberOfDice: null,
  rolls: [],
  rollSum: null
};
diceRoll = numberOfDice => {
  let rolls = [];
  let rollSum = 0;
  for (let i = 0; i < numberOfDice; i++) {
    rolls[i] = Math.floor(Math.random() * 6) + 1;
    rollSum += rolls[i];
  }
  this.setState({
    numberOfDice,
    rolls,
    rollSum
  });
};

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
    <div className="buttons">
      {[1, 2, 3, 4, 5].map(number => {
        let text = number === 1 ? "die" : "dice";
        return (
          <button
            key={number}
            onClick={() => this.diceRoll(number)}
            className="button"
          >
            {number} {text}
          </button>
        );
      })}
    </div>
  );
}

export default App;