import React, { useState, useEffect } from "react";
import axios from "axios";
import coverchar from "../img/imgchar.jpg";
import { Link } from "react-router-dom";
import icon from "../img/captain.png";

function Personnages({ search, setSearch }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `http://localhost:3000/characters?name=${search}&offset=${
            (currentPage - 1) * itemsPerPage
          }&limit=${itemsPerPage}`
        );

        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [search, currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="coverperso">
        <div className="blackcover"></div>
        <img className="cover" src={coverchar} alt="Cover" />
        <div className="centercover">
          <p>LES PERSONNAGES</p>
          <input
            className="input1"
            id="search"
            value={search}
            type="search"
            name="search"
            placeholder="Recherchez un personnage"
            onChange={(event) => {
              setSearch(event.target.value);
              setCurrentPage(1);
            }}
          ></input>
        </div>
      </div>

      <div className="container">
        <h1>LES PERSONNAGES</h1>
        <div className="flexx">
          <div className="persos">
            {characters.map((character) => (
              <Link to={`/personnages/${character._id}`} key={character._id}>
                <div
                  className="chardiv"
                  style={{
                    backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img id="captain" src={icon} alt="icon" />
                  <span className="nomhero">{character.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="buttonpage"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {currentPage}
        <button
          className="buttonpage"
          onClick={nextPage}
          disabled={characters.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Personnages;
