import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
import MovieList from "../info/MovieList";

 

function Movie() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.themoviedb.org/3/movie/popular?api_key=41cbcc1102a11d1054023605449587a0&language=ko-KR", requestOptions)
            .then(response => response.json())
            //.then(result => console.log(result.results))
            .then((result) => {
                setMovies(result.results);
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            <Header />
            <Contents>
                <section id="movieCont">
                    <div className="container">
                        <WrapTitle text={["Movie", "reference"]} /> 
                        <div className="movie__cont">
                            <div className="movie">
                                <MovieList movies={movies} />
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer />
        </div>
    )
}

export default Movie;


