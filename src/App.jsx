import { useEffect, useState } from "react";
import "./App.css";
import ResidentInfo from "./Components/ResidentInfo";
import Location from "./Components/Location";
import Hero from "./Components/Hero";

function App() {
  const [url, setUrl] = useState({});
  const random = Math.floor(Math.random() * 126) + 1;
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setUrl(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <header id="header">
        <Hero />
      </header>
      <div className="component-Location">
        <div className="location-flex">
          <Location Name={"Nombre"} Info={url.name} />
          <Location Name={"Tipo:"} Info={url.type} />
          <Location Name={"Dimensión:"} Info={url.dimension} />
          <Location Name={"Población:"} Info={url.residents?.length} />
        </div>
      </div>
      <div className="component-residentinfo">
        <div className="residentinfo-flex">
          {url.residents?.map((Url) => (
            <ResidentInfo Url={Url} key={Url.id} />
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default App;

// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
