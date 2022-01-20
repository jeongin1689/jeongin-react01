import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContInfo from "../layout/ContInfo";
import {Link} from "react-router-dom"


class YoutubeDetail extends React.Component {

    componentDidMount(){
        const{ location, history} = this.props;
        console.log({location, history})
        if(location.state === undefined){
            history.push("/youtube")
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
                <section id="youtubeCont">
  
                        <div className="youtube__detail">
                            <iframe src={`https://www.youtube.com/embed/${location.state.video.id.videoId}`}></iframe>               
                            <h3>{location.state.video.snippet.title} </h3>
                            <div className="channel">
                                <div className="circle"></div>
                                <p>{location.state.video.snippet.channelTitle}</p>
                            </div>
                            <div className="desc">
                                <h4>description</h4>
                                <p>{location.state.video.snippet.description}</p>
                            </div>

                            <Link className="list-btn" to="/youtube">목록보기</Link>

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

export default YoutubeDetail;