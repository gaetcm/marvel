import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//page :
import Home from "./assets/pages/home";
import Comics from "./assets/pages/comics";
import Personnages from "./assets/pages/personnages";
import NotFound from "./assets/pages/notfound";
import Favoris from "./assets/pages/favoris";
import Personnage from "./assets/pages/personnage";

//comp :
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/personnages/:id" element={<Personnage />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/personnages"
            element={<Personnages search={search} setSearch={setSearch} />}
          />
          <Route
            path="/comics"
            element={<Comics search={search} setSearch={setSearch} />}
          />
          <Route path="/favoris" />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
