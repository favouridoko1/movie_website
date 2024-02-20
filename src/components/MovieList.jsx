import MovieItem from './MovieItem';
import styles from './movieList.module.css'
export default function MovieList({ movieData, setMovieId, movieId }) {
    return(
        <div>
            <div className={styles.parentContainer}>
                {movieData.map((movie) => (
                    <MovieItem key={movie.id} setMovieId={setMovieId} movie={movie} />
                    
                ))}
            </div>

        </div>
    )
}