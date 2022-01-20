import React from "react";
import {Link} from "react-router-dom";

const MovieItem = ({img, title, releaseDate, overview}) => {
    console.log({img, title, releaseDate, overview});

    return (  
        <div>
            <Link to = {{ pathname: "movie-detail", state: {img, title, releaseDate, overview}}} >
                <img src={`https://image.tmdb.org/t/p/original/${img}`} alt={title} />
                <p className="title">{title}</p>
            </Link>
        </div>
    );
}

export default MovieItem;