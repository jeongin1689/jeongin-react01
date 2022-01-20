import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContInfo from "../layout/ContInfo";
import {Link} from "react-router-dom"


class MovieDetail extends React.Component {

    componentDidMount(){
        const{ location, history} = this.props;
        console.log({location, history})
        if(location.state === undefined){
            history.push("/movie")
        }
    }
    render(){
        const {location} = this.props;
    
        if( location.state===undefined){
            return<>잘못된 페이지입니다.</>
        }else{
            return(
                <>
                <Header />
                <Contents>
                <section id="movieCont">
  
                    <div class="movie__detail">
                        <img src={`https://image.tmdb.org/t/p/original/${location.state.img}`} alt={location.state.title} />                  
                        <h3>{location.state.title} </h3>
                        <div class="channel">
                            <p>{location.state.releaseDate}</p>
                        </div>
                        <div class="desc">
                            <h4>description</h4>
                            <p>{location.state.overview}</p>
                        </div>

                        <Link className="list-btn" to="/movie">목록보기</Link>

                    </div>
                </section>
                    <ContInfo />
                </Contents>
                <Footer />
                </>
            )
        }

    }
}

export default MovieDetail;