import { useState, useEffect } from "react";
import axios from "axios";
import imgcom from "../img/imgcom2.jpg";
import { Link } from "react-router-dom";
import icon from "../img/captain.png";

function Comics({ search, setSearch }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `http://localhost:3000/comics?title=${search}`
        );

        setComics(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComics();
  }, [search]);

  return (
    <>
      <div className="coverperso">
        <div className="blackcover"></div>
        <img className="cover" src={imgcom} />
        <div className="centercover">
          <p>LES COMICS</p>
          <input
            className="input1"
            id="search2"
            value={search}
            type="search"
            name="search"
            placeholder="Recherchez un comics"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="container">
        <h1>LES COMICS</h1>
        <div className="flexx">
          <div className="persos">
            {comics.map((comic) => (
              <Link to={`/comics/${comics._id}`} key={comics._id}>
                <div
                  className="chardiv"
                  style={{
                    backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img id="captain" src={icon} alt="icon" />
                  <span className="nomhero">{comic.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="persos"></div>
        </div>
      </div>
    </>
  );
}

export default Comics;
