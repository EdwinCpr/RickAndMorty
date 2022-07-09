import { useEffect, useState } from "react";
import Status from "./Status";

const ResidentInfo = ({ Url }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(Url)
      .then((res) => setCharacter(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="residentinfo background-secundary">
        <div className="residentinfo-img">
          <img src={character.image} alt="" />
          <div className="residentinfo-status">
            <div className="residentinfo-status-flex">
              <Status character={character} />
              <p className="">{character.status}</p>
            </div>
          </div>
        </div>
        <div className="residentinfo-info">
          <h2 className="name font-weight-none">{character.name}</h2>
          <div className="residentinfo-race margin-top-primary">
            <p className="bold font-size-small color-gray">RAZA</p>
            <p className="bold">{character.species}</p>
          </div>
          <div className="residentinfo-origin margin-top-primary">
            <p className="bold font-size-small color-gray">ORIGEN</p>
            <p className="bold">{character.origin?.name}</p>
          </div>
          <div className="residentinfo-episode margin-top-primary">
            <p className="bold font-size-small color-gray">
              APARICION EN EPISODIOS
            </p>
            <p className="bold">{character.episode?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;


// https://us05web.zoom.us/j/2168378039?pwd=Uk9leERITTJ0MWJKbDY5SjJ3L0p1dz09
