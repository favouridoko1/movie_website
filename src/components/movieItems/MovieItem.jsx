import MovieDetails from "../movieDetails/MovieDetails";
import styles from "./movieItem.module.css";
import textTranformPipe from "../utils/utils";

import { Routes, Route, useNavigate } from "react-router-dom";

export default function MovieItem({ movie, setMovieId, movieId }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.Contain}></div>
        {
          <div className={styles.moviesContainer}>
            <div
              className={styles.imageContainer}
              onClick={() => {
                console.log(movie.id);
                navigate("/movieDetails");
                setMovieId(movie.id);
              }}
            >
              {movie.poster_path ? (
                <img
                  className={styles.images}
                  src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                  alt=""
                />
              ) : (
                <img
                  className={styles.noImages}
                  src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  alt=""
                />
              )}
            </div>

            <div className={styles.itemContent}>
              <p className={styles.itemName}>
                {textTranformPipe(movie.title, 20)}
              </p>
            </div>
            <div className={styles.status}>
              <p>📅{movie.release_date}</p>
              <p>📈{movie.popularity}</p>
              <p>🗳️{movie.vote_count}</p>
            </div>
          </div>
        }
      </div>
    </>
  );
}
