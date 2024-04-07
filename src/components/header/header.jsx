import "./Header.css";
import { Link } from "react-router-dom";
import mrl from "../../assets/img/marvelogo.png";
import lean from "../../assets/img/lean.png";

function Header() {
  return (
    <>
      <header>
        <div className="line">
          <div className="headerbar">
            <Link to="/">
              <div className="logo">
                <img id="lean" src={lean} />
                <img id="logoM" src={mrl} />
              </div>
            </Link>
          </div>
          <div className="bar">
            <div className="persocomics">
              <Link to="/personnages">
                <button className="buttonH">PERSONNAGES</button>
              </Link>
              <Link to="/comics">
                <button className="buttonH">COMICS</button>
              </Link>
              <Link to="/favoris">
                <button className="buttonH">FAVORIS</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
