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

        const response = await axios.get(
          `http://localhost:3000/character/${id}`
        );
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
            {data.comics.map((elem) => {
              console.log(elem);
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Personnage;
