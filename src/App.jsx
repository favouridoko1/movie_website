import { useState } from "react"
import WelcomePage from "./components/WelcomePage";
import SearchBar from "./components/SearchBar";
// import MovieList from "./components/MovieList";
import './App.module.css';
import MovieDetails from "./components/MovieDetails";
import { Route, Router, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";


function App() {
const [movieData, setMovieData] = useState([]);
const [movieId, setMovieId] = useState(1211957);


  return (
    <div className="App">
  
      <Routes>
          <Route path="/" element={<WelcomePage />}/>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/movies" element={<SearchBar movieId={movieId} movieData={movieData} setMovieId={setMovieId} setMovieData={setMovieData}/>} />
          <Route path="/movieDetails" element={<MovieDetails movieId={movieId} />} />
      </Routes>
  

    </div>

  )
}

export default App

