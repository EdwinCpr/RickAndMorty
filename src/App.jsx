import Rick from "./Images/rick7.webp";
import InputSearch from "./components/InputSearch.jsx"
import BoxInfo from "./components/BoxInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [location, setLocation] = useState([]);
  const random = Math.floor(Math.random() * 126) + 1
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocation(res.data));
  }, []);
  const uploadLocation = (location) => {
    setLocation(location);
  };
  return (
    <div className="container">
      <div className="rickandmorty">
        <div className="rickandmorty-hero">
          <img src={Rick} alt="hero-rick" />
        </div>
        <div className="rickandmorty-search">
          <InputSearch UploadLocation={uploadLocation} />
        </div>
        <div className="rickandmorty-info">
          <div className="info-flex">
            <BoxInfo Name={"Dimension:"} Result={location?.dimension} />
            <BoxInfo Name={"Nombre:"} Result={location?.name} />
            <BoxInfo Name={"Tipo:"} Result={location?.type} />
            <BoxInfo Name={"Residentes:"} Result={location?.residents?.length} />
          </div>
        </div>
        <div className="rickandmorty-card">
          {location?.residents?.length === 0 ? <h1 className="errors-message">No se encontro habitante en esta localizacion</h1> : (
            <div className="card-grid">
              {
                location?.residents?.map((resident) => (
                  <Card Residents={resident} key={resident} />
                ))
              }
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;