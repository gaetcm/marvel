import { useState, useEffect } from "react";
import axios from "axios";
import imgcom from "../img/imgcom2.jpg";
import { Link } from "react-router-dom";

function Comics({ search, setSearch }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `http://localhost:3000/comics?title=${search}&skip=${skip}&limit=${itemsPerPage}`
        );

        setComics(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComics();
  }, [search, skip]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setSkip(skip + itemsPerPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setSkip(skip - itemsPerPage);
  };

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
                  <span className="nomhero">{comic.title}</span>
                </div>
              </Link>
            ))}
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
            disabled={comics.length < itemsPerPage}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Comics;
