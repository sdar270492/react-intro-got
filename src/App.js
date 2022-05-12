import "./App.css";
import React from "react";
import CardList from "./components/card-list";
import Filter from "./components/filters";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import AboutUs from "./components/about-us";

function App() {
  const [season, setSeason] = React.useState(1);
  const [count, setCount] = React.useState(0);
  const [showList, setShowList] = React.useState(false);

  // class componentDidMount!!!
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About us</Link>
        </div>
        <Link to="/episodes">Episodes</Link>

        <p>{count}</p>

        <button
          className="d-block btn btn-primary mb-3"
          onClick={() => {
            setShowList(!showList);
          }}
        >
          Toggle list
        </button>

        <Filter
          season={season}
          onChangeSeason={(season) => {
            setSeason(season);
          }}
        />

        <Routes>
          <Route
            path="/episodes/:num"
            element={<CardList season={season}></CardList>}
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
