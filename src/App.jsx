import { useState } from "react";
import "./App.css";

function App() {
  const today = new Date().toLocaleDateString();
  const randomNumber = Math.floor(Math.random() * 100);
  return (
    <>
      <div>
        <p className="text">
          Hello my name is: <span>Muhammadyusuf</span>
        </p>
        <p>
          This is the day: <span>{today}</span>
        </p>
        <p className="from_1_to_100">
          A random number from 0 to 100: <span className="number">{randomNumber}</span>{" "}
        </p>
      </div>
    </>
  );
}

export default App;
