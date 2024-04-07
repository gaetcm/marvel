import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Personnage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(`http://localhost:3000/comics/${id}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div className="content">
            <div className="elemID">
              <div
                className="chardivid"
                style={{
                  backgroundImage: `url(${data.thumbnail.path}.${data.thumbnail.extension})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="oblique">
                <div className="textid">
                  <p className="divP">{data.name}</p>
                  <span>{data.description}</span>
                </div>
              </div>
            </div>
            <div className="flexx">
              <div className="persos">
                {data.comics.map((elem) => {
                  console.log(elem.title);
                  return (
                    <div>
                      <div
                        className="testtest"
                        style={{
                          backgroundImage: `url(${elem.thumbnail.path}.${elem.thumbnail.extension})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <span>{elem.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Personnage;
