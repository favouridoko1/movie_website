import { useState, useEffect } from "react";
import styles from './searchBar.module.css';
import MovieList from "./MovieList";

const api_key = 'bbbfa863fae709a9395aa30f77884fc6';
const apiUrl = 'https://api.themoviedb.org/3/';
const queryS = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=bbbfa863fae709a9395aa30f77884fc6';

export default function SearchBar({ movieData, setMovieData, setMovieId, movieId }) {
    const [query, setQuery]= useState("The");
    useEffect(()=>{
        async function fetchApi(endpoint) {
            const res = await fetch(`${apiUrl}${endpoint}?api_key=${api_key}&language=en-US`);
            

            const data = await res.json();
            console.log(data.results);
           setMovieData(data.results);
        }
        fetchApi(`movie/popular`);
    },[query])

    return (
        <>
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={query} onChange={(e)=> setQuery(e.target.value) } />
        </div>

        <MovieList setMovieId={setMovieId} movieData={movieData} setMovieData={setMovieData} movieId={movieId} />
        </>

    )
}
