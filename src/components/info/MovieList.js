import React from "react";
import MovieItem from "../info/MovieItem";

const MovieList = (props) => {
    //console.log(props)
    //img, title, releaseDate, overview
    return (
        <>
            {props.movies.map((movie) => ( 
                <MovieItem 
                    key={movie.id} 
                    img ={movie.poster_path}
                    releaseDate ={movie.release_date}
                    overview ={movie.overview}
                    title = {movie.title}
                 />
            ))}
        </>
    )

}   

export default MovieList;