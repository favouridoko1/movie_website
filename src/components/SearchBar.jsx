import { useState, useEffect } from "react";
import styles from './searchBar.module.css';
import MovieList from "./MovieList";
import { Link } from "react-router-dom";

const api_key = 'bbbfa863fae709a9395aa30f77884fc6';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const popularMovieURL = 'https://api.themoviedb.org/3/';

export default function SearchBar({ movieData, setMovieData, setMovieId, movieId }) {
    const [query, setQuery]= useState("");

    useEffect(()=> {
        if(query ==="") {
            async function fetchPopularMovie(endpoint) {
                const response = await fetch(`${popularMovieURL}${endpoint}?api_key=${api_key}`);
                const data = await response.json();
                setMovieData(data.results)
            }
            fetchPopularMovie('movie/popular')
        } else {
            async function fetchApi() {
                const res = await fetch(`${apiUrl}?query=${query}&api_key=${api_key}`)
                const data = await res.json();
                console.log(data.results);
                setMovieData(data.results);
            }
            fetchApi();
        }
    },[query])
 
    return (
        <>
        <div className={styles.linkContainer}>
            <Link className={styles.link} to="/">Go to About</Link>
        </div>
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={query} onChange={(e)=> setQuery(e.target.value) } placeholder="Search movies..." />
        </div>

        <MovieList setMovieId={setMovieId} movieData={movieData} setMovieData={setMovieData} movieId={movieId} />
        </>

    )
}
