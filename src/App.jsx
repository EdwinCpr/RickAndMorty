import { useState } from "react";
import "./App.css";
import HeaderImg from "./Components/Img/HeaderImg.png";

function App() {
  return (
    <div className="App">
      <header id="header">
        <div className="header-img">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="header-input">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            id="input-search"
          />
        </div>
      </header>
    </div>
  );
}

export default App;

// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
