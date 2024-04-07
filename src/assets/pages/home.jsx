import { Link } from "react-router-dom"; // Import Link from react-router-dom
import VideoPlayer from "../../components/video";
import img from "../img/imgchar.jpg";
import img2 from "../img/imgcom2.jpg";

function Home() {
  return (
    <>
      <div className="fondnoir">
        <div className="container">
          <div className="content">
            <div className="flexx">
              <VideoPlayer />
            </div>
          </div>
          <div className="flexcol">
            <div className="col1">
              <Link to="/personnages">
                <div className="elemID">
                  <div
                    className="chardivid"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="oblique">
                    <div className="textid">
                      <p className="divP">LES PERSONNAGES</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col2">
              <Link to="/comics">
                <div className="elemID">
                  <div
                    className="chardivid"
                    style={{
                      backgroundImage: `url(${img2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="oblique">
                    <div className="textid">
                      <p className="divP">LES COMICS</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
