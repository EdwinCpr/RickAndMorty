import { useEffect, useState } from "react";
import "./App.css";
import ResidentInfo from "./Components/ResidentInfo";
import Location from "./Components/Location";
import Hero from "./Components/Hero";

function App() {
  const [character, setCharacter] = useState({})
  const random = Math.floor(Math.random()*126) + 1
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setCharacter(res.data))
      .catch(error => console.log(error));
  }, []);
  console.log(character.residents)
  return (
    <div className="App">
      <header id="header">
        <Hero />
      </header>
      <div className="component-Location">
        <div className="Location-flex">
          <Location Name={"Nombre"} Info={character.name} />
          <Location Name={"Tipo:"} Info={character.type} />
          <Location Name={"Dimensión:"} Info={character.dimension} />
          <Location Name={"Población:"} Info={character.residents?.length} />
        </div>
      </div>
      <div className="component-ResidentInfo" />
    </div>
  );
}

export default App;

// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
