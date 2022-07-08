import { useEffect, useState } from "react";
import "./App.css";
import ResidentInfo from "./Components/ResidentInfo";
import Location from "./Components/Location";
import Hero from "./Components/Hero";

function App() {
  const [url, setUrl] = useState({});
  const [loading, setLoading] = useState(true);
  const random = Math.floor(Math.random() * 126) + 1;
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => {
        setUrl(res.data);
        setLoading(!loading);
      })
      .catch((error) => {
        console.log(error);
        setLoading(!loading);
      });
  }, []);
  return (
    <div className="App">
      <>
        <header id="header">
          <Hero />
        </header>
        <div className="component-Location">
          {loading ? (
            <>
              <div className="location-flex">
                <Location Name={"Nombre"} Info={"Cargando..."} />
                <Location Name={"Tipo:"} Info={"Cargando..."} />
                <Location Name={"Dimensión:"} Info={"Cargando..."} />
                <Location Name={"Población:"} Info={"Cargando..."} />
              </div>
            </>
          ) : (
            <>
              <div className="location-flex">
                <Location Name={"Nombre"} Info={url.name} />
                <Location Name={"Tipo:"} Info={url.type} />
                <Location Name={"Dimensión:"} Info={url.dimension} />
                <Location Name={"Población:"} Info={url.residents?.length} />
              </div>
            </>
          )}
        </div>
        <div className="component-residentinfo">
          {loading ? (
            <h1 className="loadin">Cargando, porfavor espere...</h1>
          ) : (
            <div>
              <div className="residentinfo-flex">
                {url.residents?.map((Url) => (
                  <ResidentInfo Url={Url} key={Url.name} />
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
}

export default App;

// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
