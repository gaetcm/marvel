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
            <div className="customer">
              <button>CONNEXION</button>
              <button>S'INSCRIRE</button>
            </div>
            <div className="persocomics">
              <Link to="/personnages">
                <button>PERSONNAGES</button>
              </Link>
              <Link to="/comics">
                <button>COMICS</button>
              </Link>
              <button>FAVORIS</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
