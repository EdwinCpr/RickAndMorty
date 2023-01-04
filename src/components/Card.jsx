import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/card.css";
import 'aos/dist/aos.css';
import StatusColor from "./StatusColor";

const Card = ({ Residents }) => {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios.get(Residents)
            .then((res) => setCharacter(res.data))
    }, [])
    return (
        <div className="card">
            <div className="card-status">
                <div className="status-flex">
                    <p>{character.status}</p>
                    <StatusColor Status={character.status} />
                </div>
            </div>
            <div className="card-image">
                <img src={character.image} alt="character-image" />
            </div>
            <div className="card-name">
                <h2>{character.name}</h2>
            </div>
            <div className="card-more-info">
                <div className="card-species">
                    <h3>Especie: <span>{character.species}</span></h3>
                </div>
                <div className="card-gender">
                    <h3>Genero: <span>{character.gender}</span></h3>
                </div>
                <div className="card-episodes">
                    <h3>Episodios que aparece: <span>{character.episode?.length}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Card;