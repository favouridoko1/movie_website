import MovieItem from "../movieItems/MovieItem";
import styles from "./movieList.module.css";
export default function MovieList({ movieData, setMovieId }) {
  return (
    <div>
      <div className={styles.parentContainer}>
        {movieData.map((movie) => (
          <MovieItem key={movie.id} setMovieId={setMovieId} movie={movie} />
        ))}
      </div>
    </div>
  );
}
