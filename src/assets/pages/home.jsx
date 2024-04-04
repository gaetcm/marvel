import Personnages from "./personnages";
import Comics from "./comics";

function Home() {
  return (
    <>
      <div className="container">
        <div className="content">
          <Personnages />
        </div>
        <div className="content">
          <Comics />
        </div>
      </div>
    </>
  );
}

export default Home;
