import "./App.css";
import Data from "./Components/Data";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Hero />
      </header>
      <main id="main">
        <div className="data-flex">
          <Data Name={"Nombre"} Info={"Space Station"}/>
          <Data Name={"Tipo:"} Info={"Sin información"}/>
          <Data Name={"Dimensión:"} Info={"Sin detalle"}/>
          <Data Name={"Población:"} Info={"100"}/>
        </div>
      </main>
    </div>
  );
}

export default App;

// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
