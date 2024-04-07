import React, { useState, useEffect } from "react";
import axios from "axios";

function Favoris() {
  const [favorites, setFavorites] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    const fetchCharacters = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `https://site--marvelback--gjsk6mhzy5qh.code.run/characters`
        );

        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <h1>Favoris</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="persos">
          {characters
            .filter((character) => favorites.includes(character._id))
            .map((character) => (
              <div
                className="testtest"
                style={{
                  backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {" "}
                <span className="nomhero" key={character._id}>
                  {character.name}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Favoris;
