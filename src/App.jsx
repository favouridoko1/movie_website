import { useState } from "react";
import WelcomePage from "./components/welcomePage/WelcomePage";
import SearchBar from "./components/search/SearchBar";
import "./App.module.css";
import MovieDetails from "./components/movieDetails/MovieDetails";
import { Route, Router, Routes } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [movieId, setMovieId] = useState(1211957);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/movies"
          element={
            <SearchBar
              movieId={movieId}
              movieData={movieData}
              setMovieId={setMovieId}
              setMovieData={setMovieData}
            />
          }
        />

        <Route
          path="/movieDetails"
          element={<MovieDetails movieId={movieId} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
