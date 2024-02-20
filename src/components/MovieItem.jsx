// import { Navigate, useNavigate } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import styles from './movieItem.module.css';

import {Routes, Route, useNavigate} from 'react-router-dom';



export default function MovieItem({ movie, setMovieId, movieId }) {
    const navigate = useNavigate();

    return (
        <>
        <div className={styles.parent}>
            <div className={styles.Contain}>

            </div>
            {
                <div className={styles.moviesContainer}>    
                    
                     <div className={styles.imageContainer}>
                        {
                          movie.poster_path ? <img onClick={()=> {
                                console.log(movie.id)
                                navigate('/movieDetails')
                                setMovieId(movie.id)
                            }  
                            }   className={styles.images} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" /> : <img src="../images/no-image.jpg" alt="" />
                        }  
                     </div>
                    
                        <div className={styles.itemContent}>
                            <p className={styles.itemName}>{movie.title}</p>
                        </div>
                        <div className={styles.status}>
                            <p>📅 {movie.release_date}</p>
                            <p>📈 {movie.popularity}</p>
                            <p>🗳️ {movie.vote_count}</p>
                        </div>
                </div>
                }
        </div>
        </>
    )
}





