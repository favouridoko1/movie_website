import { useEffect, useState } from "react";
import styles from "./movieDetails.module.css";
import { Link } from "react-router-dom";

export default function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);
  const apiKey = "bbbfa863fae709a9395aa30f77884fc6"; // Use an environment variable for the API key
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    fetchApi();
  }, [url]); // Update dependency to only include url

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}>
          <div className={styles.innerCircle}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

  return (
    <div>
      <div className={styles.linkContainer}>
        <Link className={styles.linkStyle} to="/movies">
          Back to Movies
        </Link>
      </div>

      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      >
        <div className={styles.detailsContainer}>
          {movie.poster_path ? (
            <img
              className={styles.images}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <img src="./placeholder.png" alt="Placeholder" />
          )}

          <div className={styles.details}>
            <h1>{movie.title}</h1>
            <p>
              <span className={styles.releaseDate}>Release Date:</span>
              {movie.release_date}
            </p>

            {movie.tagline && <p className={styles.tagline}>{movie.tagline}</p>}

            <div className={styles.overviewContainer}>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
