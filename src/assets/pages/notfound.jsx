import { Link } from "react-router-dom";
import spod from "../img/spod.jpeg";

const NotFound = () => {
  return (
    <main>
      <div className="container">
        <div className="error_display">
          <p>404 : PAGE NOT FOUND</p>
          <Link to="/">Retour à la page d'accueil</Link>
          <img src={spod} />
        </div>
      </div>
    </main>
  );
};
export default NotFound;
