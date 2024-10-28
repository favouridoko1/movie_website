import { useState, useEffect, useCallback } from "react";
import styles from "./searchBar.module.css";
import MovieList from "../movieList/MovieList";
import { Link } from "react-router-dom";
import ThreeDotsWave from "../three-dots-wave/three-dots-wave";

const api_key = "bbbfa863fae709a9395aa30f77884fc6";
const apiUrl = "https://api.themoviedb.org/3/search/movie";
const popularMovieURL = "https://api.themoviedb.org/3/";

export default function SearchBar({ movieData, setMovieData, setMovieId }) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(
    async (url) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch movies.");
        }
        const data = await response.json();
        setMovieData(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [setMovieData]
  );

  useEffect(() => {
    if (query.trim() === "") {
      fetchMovies(`${popularMovieURL}movie/popular?api_key=${api_key}`);
    } else {
      fetchMovies(
        `${apiUrl}?query=${encodeURIComponent(query)}&api_key=${api_key}`
      );
    }
  }, [query, fetchMovies]);

  return (
    <>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/">
          Go to Home
        </Link>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movies..."
        />
      </div>
      {isLoading && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}>
            <div className={styles.innerCircle}></div>
          </div>
        </div>
      )}
      {/* {isLoading && <p className={styles.loading}>Hellow work ffffffffffffffffffffffffffffffffffffff</p>} */}
      {error && <p className="">{error}</p>}
      <MovieList
        setMovieId={setMovieId}
        movieData={movieData}
        setMovieData={setMovieData}
      />
    </>
  );
}
