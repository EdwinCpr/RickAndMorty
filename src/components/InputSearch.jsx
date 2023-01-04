import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/inputSearch.css";

const InputSearch = ({ UploadLocation }) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/?name=${search}`)
            .then((res) => setResults(res.data.results))
    }, [search]);
    const sendLocation = location => {
        setSearch("");
        UploadLocation(location);
    };
    return (
        <div>
            <div className="search-flex">
                <div className="search">
                    <i className="fa-solid soon fa-magnifying-glass"></i>
                    <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    {search.length > 0 && <i className="fa-solid fa-xmark x" onClick={() => setSearch("")}></i>}
                </div>
            </div>
            {
                search.length > 0 && (
                    <div className="list-result">
                        {
                            results.map((result) => (
                                <p onClick={() => sendLocation(result)} key={result.id}>{result.name}</p>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default InputSearch;