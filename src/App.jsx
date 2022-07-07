import "./App.css";
import Card from "./Components/Card";
import Data from "./Components/Data";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Hero />
      </header>
      <div className="component-data">
        <div className="data-flex">
          <Data Name={"Nombre"} Info={"Space Station"} />
          <Data Name={"Tipo:"} Info={"Sin información"} />
          <Data Name={"Dimensión:"} Info={"Sin detalle"} />
          <Data Name={"Población:"} Info={"100"} />
        </div>
      </div>
      <div className="component-card">
        <div className="card-flex">
          <Card
            Status={"Muerto"}
            Name={"Adjudicador Rick"}
            Type={"Humano"}
            Info={"Sin información"}
            Episodes={1}
          />
          <Card
            Status={"Muerto"}
            Name={"Adjudicador Rick"}
            Type={"Humano"}
            Info={"Sin información"}
            Episodes={1}
          />
          <Card
            Status={"Muerto"}
            Name={"Adjudicador Rick"}
            Type={"Humano"}
            Info={"Sin información"}
            Episodes={1}
          />
          <Card
            Status={"Muerto"}
            Name={"Adjudicador Rick"}
            Type={"Humano"}
            Info={"Sin información"}
            Episodes={1}
          />
          <Card
            Status={"Muerto"}
            Name={"Adjudicador Rick"}
            Type={"Humano"}
            Info={"Sin información"}
            Episodes={1}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
