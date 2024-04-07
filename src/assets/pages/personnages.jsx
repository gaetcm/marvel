import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgchar from "../img/imgchar.jpg";
import Favoris from "./favoris";

function Personnages({ search, setSearch, favorites, setFavorites }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `https://site--marvelback--gjsk6mhzy5qh.code.run/characters?name=${search}&skip=${skip}&limit=${itemsPerPage}`
        );

        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [search, skip]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setSkip(skip + itemsPerPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setSkip(skip - itemsPerPage);
  };

  const addToFavorites = (characterId) => {
    if (!favorites.includes(characterId)) {
      const updatedFavorites = [...favorites, characterId];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log("Ajouté aux favoris :", characterId);
    }
  };

  const removeFromFavorites = (characterId) => {
    const updatedFavorites = favorites.filter((id) => id !== characterId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log("Retiré des favoris :", characterId);
  };

  const isFavorite = (characterId) => {
    return favorites.includes(characterId);
  };

  return (
    <>
      <div className="coverperso">
        <div className="blackcover"></div>
        <img className="cover" src={imgchar} />
        <div className="centercover">
          <p>LES PERSONNAGES</p>
          <input
            className="input1"
            id="search2"
            value={search}
            type="search"
            name="search"
            placeholder="Recherchez un personnages"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="container">
        <h1>LES PERSONNAGES</h1>
        <div className="flexx">
          <div className="persos">
            {characters.map((character) => (
              <div
                className="chardiv"
                style={{
                  backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Link to={`/personnages/${character._id}`} key={character._id}>
                  <p className="nomhero">{character.name}</p>
                </Link>
                <button
                  onClick={() => {
                    if (isFavorite(character._id)) {
                      removeFromFavorites(character._id);
                    } else {
                      addToFavorites(character._id);
                    }
                  }}
                >
                  {isFavorite(character._id)
                    ? "Retirer des favoris"
                    : "Ajouter aux favoris"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pagination">
        <button
          className="buttonpage"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {currentPage}
        <button
          className="buttonpage"
          onClick={nextPage}
          disabled={characters.length < itemsPerPage}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Personnages;
